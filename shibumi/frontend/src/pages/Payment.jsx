import React from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import "../pages/adressscreen.scss";
import CheckOutSteps from "../components/CheckOutSteps";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Payment = () => {
  const navigate = useNavigate();

  const [paymentMethodName, setPaymentMethodName] = useState("PayPal");

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/address");
    }
  }, [userInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  return (
    <div className="adress">
      <Helmet>
        <title>payment method</title>
      </Helmet>
      <div className="adress__cover mb-5"></div>
      <div className="container small-container">
        <CheckOutSteps step1 step2 step3></CheckOutSteps>
        <h1 className="text-center m-5">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Payment;
