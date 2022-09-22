import React, { useEffect } from "react";
import "./cartpage.scss";
import { FaPlusCircle, FaMinusCircle, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cartpage = ({ rerender, setrerender }) => {
  const navigate = useNavigate();
  let myProducts = JSON.parse(localStorage.getItem("products"));
  // const [productCount, setProductCount] = useState();
  const [products, setProduct] = useState([]);
  // const [render, setRender] = useState(true);

  
  let subtotal = 0;
  products.map((myProduct) => {
    subtotal += myProduct.price * myProduct.count;
  });

  const countPlus = (myProduct) => {
    myProduct.count++;

    localStorage.setItem("products", JSON.stringify(myProducts));
    setrerender((value) => !value);
  };

  const countMinus = (myProduct) => {
    myProduct.count--;
    localStorage.setItem("products", JSON.stringify(myProducts));
    setrerender((value) => !value);
  };

  //-----------------------------------------------------------bu kod performansi oldurur
  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("products")));
  }, [rerender]);
  //-----------------------------------------------------------bu kod performansi oldurur

  const removeProductHandler = (e) => {
    let newproducts = myProducts && myProducts.filter((z) => z._id !== e);
    localStorage.setItem("products", JSON.stringify(newproducts));
    setrerender((value) => !value);
  };
  const checkoutHandler = () => {
    navigate("/signin?redirect=/address");
  };
  return (
    <div className="cartpage">
      <div className="cartpage__cover"></div>
      <div className="cartpage__container container">
        <h1 className="my-5">Shopping Cart</h1>
        {myProducts.length === 0 ? (
          <h1>
            your cart is empty. <Link to="/shop">Go Shopping</Link>
          </h1>
        ) : (
          <div className="cartpage__container__row row">
            <div className="cartpage__container__row__left col-lg-9">
              <table className="table">
                <tbody>
                  {myProducts &&
                    myProducts.map((myProduct) => {
                      return (
                        <tr className="table__rows">
                          <td className="table__cells">
                            <img src={myProduct.image} alt="" />
                          </td>
                          <td className="table__cells">
                            <span className="cell__span">{myProduct.name}</span>
                          </td>
                          <td className="table__cells">
                            <span className="cell__span">
                              {myProduct.price} AZN
                            </span>
                          </td>
                          <td className="table__cells">
                            <span className="cell__span counter__parent">
                              <span className="counter">
                                {" "}
                                <FaMinusCircle
                                  onClick={() => countMinus(myProduct)}
                                />
                              </span>
                              {myProduct.count}
                              <span className="counter">
                                <FaPlusCircle
                                  onClick={() => countPlus(myProduct)}
                                />
                              </span>{" "}
                            </span>
                          </td>
                          <td className="table__cells cell__span__total">
                            <span className="cell__span ">
                              {" "}
                              {myProduct.price * myProduct.count} AZN
                            </span>
                          </td>
                          <td className="table__cells">
                            <span className="cell__span">
                              <MdCancel
                                className="delete__icon"
                                onClick={() =>
                                  removeProductHandler(myProduct._id)
                                }
                              />
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="cartpage__container__row__right col-lg-3">
              <span className="total__price">
                Total price: <span>{subtotal} AZN</span>
              </span>
              <hr />
              <button className="checkout__btn" onClick={checkoutHandler}>
                Proceed to checkout{" "}
                <span>
                  <FaChevronRight />
                </span>
              </button>

              <hr />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
