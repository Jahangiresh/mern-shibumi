import React, { useEffect, useReducer, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { getError } from "../utils";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./orderscreen.scss";
import { toast } from "react-toastify";
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, order: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "PAY_REQUEST":
      return { ...state, loadingPay: true };
    case "PAY_SUCCESS":
      return { ...state, loadingPay: false, successPay: true };
    case "PAY_FAIL":
      return { ...state, loadingPay: false };
    case "PAY_RESET":
      return { ...state, loadingPay: false, successPay: false };
    default:
      return state;
  }
}

const OrderScreen = () => {
  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order, successPay, loadingPay }, dispatch] =
    useReducer(reducer, {
      loading: true,
      order: {},
      error: "",
      loadingPay: false,
      successPay: false,
    });

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.itemsPrice,
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  }
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(
          `/api/orders/order/${order._id}/pay`,
          details,
          {
            headers: { authorization: `Bearer ${userInfo.data.token}` },
          }
        );
        dispatch({ type: "PAY_SUCCESS", payload: data });
        toast.success("Order is Paid");
      } catch (err) {
        dispatch({ type: "PAY_FAIL", payload: getError(err) });

        toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, []);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/order/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.data.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    if (!userInfo) {
      navigate("/login");
    }
    if (!order._id || successPay || (order._id && order._id !== orderId)) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: "PAY_RESET" });
      }
    } else {
      const loadPaypalScript = async () => {
        const { data: clientId } = await axios.get("/api/keys/paypal", {
          headers: { authorization: `Bearer ${userInfo.data.token}` },
        });
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      loadPaypalScript();
    }
  }, [order, userInfo, orderId, navigate, paypalDispatch, successPay]);

  //USEEFFECT PROBLEMILIR SONSUZ RENDER EDIR GIJDILLAG ---------------------------------(__)
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox className="rowrow" variant="danger">
      {error}
    </MessageBox>
  ) : (
    <div className="orderscreen">
      <Helmet>
        <title>Order {orderId}</title>
      </Helmet>
      <div className="container">
        <h1 className="my-3">order {orderId}</h1>
        <div className="row orderscreen__row">
          <div className="col-8 orderscreen__row__left">
            <div className="card">
              <Card.Body>
                <h4>Shipping</h4>
                <strong>Name:</strong>{" "}
                <span>{order.shippingAddress.fullName}</span>
                <br />
                <strong>Address:</strong>
                <span>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </span>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">not delivered</MessageBox>
                )}
              </Card.Body>
            </div>

            <div className="card">
              <Card.Body>
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                  <strong>Method:</strong> <span>{order.paymentMethod}</span>
                </Card.Text>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">not paid</MessageBox>
                )}
              </Card.Body>
            </div>
            <div className="card">
              <Card.Body>
                <Card.Title>Items</Card.Title>
                <ListGroup variant="flush">
                  {order.orderItems.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="cartpage__container__row__left__items__row row"
                      >
                        <div className="cartpage__container__row__left__items__row__image col-2">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cartpage__container__row__left__items__row__title col-4">
                          <span>{item.name}</span>
                        </div>
                        <div className="cartpage__container__row__left__items__row__price col-3">
                          <span>{item.price} AZN</span>
                        </div>
                        <div className="cartpage__container__row__left__items__row__count col-3">
                          <span>{item.count}</span>
                        </div>
                      </div>
                    );
                  })}
                </ListGroup>
              </Card.Body>
            </div>
          </div>
          <div className="col-4 orderscreen__row__right ">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Items:
                        {order.orderItems.length}
                      </Col>

                      <Col>
                        TOTALPRICE:
                        {order.itemsPrice}
                        AZN
                      </Col>
                      {!order.isPaid && (
                        <ListGroup.Item>
                          {isPending ? (
                            <LoadingBox />
                          ) : (
                            <div>
                              <PayPalButtons
                                createOrder={createOrder}
                                onApprove={onApprove}
                                onError={onError}
                              ></PayPalButtons>
                            </div>
                          )}
                          {loadingPay && <LoadingBox></LoadingBox>}
                        </ListGroup.Item>
                      )}
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
