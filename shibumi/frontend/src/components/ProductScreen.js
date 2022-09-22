import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import logger from "use-reducer-logger";
import { useReducer } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import "./productscreen.scss";
import Rating from "./Rating";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { getError } from "../utils";
import { useRef } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen({ setcount, setrerender }) {
  const navigate = useNavigate();

  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const resp = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    getProduct();
  }, [slug]);

  let productCount = useRef(0);

  const addToLocal = (product) => {
    let products = JSON.parse(localStorage.getItem("products"));
    let _id = product._id;
    let existedProd = products.find((x) => x._id === _id);

    if (product.countInStock < product.count) {
      window.alert("sorry this product is out of stock");
      return;
    } else if (!existedProd) {
      product.count = productCount.current.value;
      products.push(product);
    } else {
      // products.splice(products.indexOf(existedProd), 1); --delete prod
      existedProd.count = productCount.current.value;
    }

    setcount(products.length);

    localStorage.setItem("products", JSON.stringify(products));
    setrerender((value) => !value);
    navigate(`/cartpage`);
  };

  return loading ? (
    <div>
      <LoadingBox />
    </div>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="singleproduct">
      <div className="singleproduct__container container">
        <div className="singleproduct__container__row row">
          <div className="singleproduct__container__row__left col-12 col-lg-6 ">
            <img src={product.image} alt="prod.jpg" />
          </div>
          <div className="singleproduct__container__row__right col-12 col-lg-6">
            <Helmet>
              <title>{product.name}</title>
            </Helmet>
            <h1>{product.name}</h1>
            <Accordion>
              <AccordionSummary
                expandIcon={"v"}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <p className="accordion__span">how to use</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>{product.instruction}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <hr />

            <span>price: ${product.price} USD</span>
            <hr />
            <p>{product.desc}</p>
            <hr />
            <div className="singleproduct__container__row__right__inputs">
              <select name="" id="select">
                <option value="skin types">my skin</option>
                <option value="skin types">skin </option>
              </select>
              <Rating rating={product.rating} numReviews={product.numReviews} />
              <p className="mt-5 status__row">
                Avaibility:
                {product.countInStock > 0 ? (
                  <span className="text-success status__span">avaibile</span>
                ) : (
                  <span className="text-danger status__span">not avaibile</span>
                )}
              </p>
              <div className="singleproduct__container__row__right__inputs__cart">
                <input
                  ref={productCount}
                  className="productCount"
                  type="number"
                  name=""
                  defaultValue={1}
                  id=""
                />{" "}
                <button
                  onClick={() => addToLocal(product)}
                  className="singleproduct__container__row__right__inputs__cart__addBtn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
