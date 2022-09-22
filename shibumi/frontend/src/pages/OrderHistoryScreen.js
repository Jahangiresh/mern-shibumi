import React, { useEffect, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { getError } from "../utils";
import "./orderhistory.scss";
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const OrderHistoryScreen = () => {
  //PROBLEM VAR SEHIFE DONGUDEDI CIXMIR

  const navigate = useNavigate();
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const [userInfo, setUserInfo] = useState([]);

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   if (userInfo) {
  //     setUserInfo(userInfo);
  //   }
  // }, [userInfo]);

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get("/api/orders/order/mine", {
          headers: { Authorization: `Bearer ${userInfo.data.token}` },
        });

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
    console.log(userInfo);
  }, []);

  return (
    <div className="container">
      <Helmet>
        <title>Order History</title>
      </Helmet>
      <h1>Order History1</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table ">
          <thead className="order__head">
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="order__table">
                <td>
                  {" "}
                  <span className="d-lg-none d-md-none">ID :</span>
                  {order._id}
                </td>
                <td>
                  {" "}
                  <span className="d-lg-none d-md-none"> DATE :</span>
                  {order.createdAt.substring(0, 10)}
                </td>
                <td>
                  {" "}
                  <span className="d-lg-none d-md-none"> TOTAL :</span>
                  {order.itemsPrice}
                </td>
                <td>
                  {" "}
                  <span className="d-lg-none d-md-none"> PAID :</span>
                  {order.isPaid ? order.paidAt.substring(0, 10) : "no"}
                </td>
                <td>
                  {" "}
                  <span className="d-lg-none d-md-none">DELIVERED :</span>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "no"}
                </td>
                <td>
                  <Button
                    className="order__btn"
                    type="button"
                    // variant="dark"
                    onClick={() => {
                      navigate(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
