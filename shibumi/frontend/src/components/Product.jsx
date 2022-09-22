import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
// import { useState } from "react";

const Product = ({
  productslist,
  inputvalue,
  category,
  setcount,
  setrerender,
  rerender,
}) => {
  const navigate = useNavigate();
  if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify([]));
  }

  const addToLocal = (prod) => {
    let products = JSON.parse(localStorage.getItem("products"));
    let _id = prod._id;
    let existedProd = products.find((x) => x._id === _id);

    if (prod.countInStock < prod.count) {
      window.alert("sorry this product is out of stock");
      return;
    } else if (!existedProd) {
      products.push(prod);
    } else {
      // products.splice(products.indexOf(existedProd), 1); --delete prod
      existedProd.count++;
    }
    setrerender((value) => !value);
    setcount(products.length);
    localStorage.setItem("products", JSON.stringify(products));
  };

  return (
    <>
      {productslist &&
        productslist
          .filter((e) => e.name.includes(inputvalue))
          .map((prod) => {
            return (
              <div key={prod._id} className="product col-lg-4 col-md-6 col-12">
                {prod.countInStock === 0 ? (
                  <button className="add__cart">out of stock</button>
                ) : (
                  <button
                    onClick={() => addToLocal(prod)}
                    className="add__cart"
                  >
                    add to card
                  </button>
                )}
                {/* <button onClick={() => addToLocal(prod)} className="add__cart">
                  add to card
                </button> */}
                <button
                  onClick={() => {
                    navigate(`/product/${prod.slug}`);
                  }}
                  className="view__product"
                >
                  view product
                </button>
                <div className="product__image">
                  <img src={prod.image} alt="" />
                </div>
                <div className="product__title">
                  <h3>{prod.name} </h3>
                  <span>{prod.price}</span>
                  <Rating rating={prod.rating} numReviews={prod.numReviews} />
                </div>
              </div>
            );
          })}
    </>
  );
};

export default Product;
