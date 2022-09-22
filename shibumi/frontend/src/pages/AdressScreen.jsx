import React from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../pages/adressscreen.scss";
import { useState } from "react";
import FormLabel from "react-bootstrap/esm/FormLabel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CheckOutSteps from "../components/CheckOutSteps";
const AdressScreen = () => {
  // let localAddress = JSON.parse(localStorage.getItem("address"));

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // const [fullName, setFullName] = useState(localAddress.fullName || "");
  // const [address, setAddress] = useState(localAddress.address || "");
  // const [city, setCity] = useState(localAddress.city || "");
  // const [postalCode, setPostalCode] = useState(localAddress.postalCode || "");
  // const [country, setCountry] = useState(localAddress.country || "");

  const [fullName, setFullName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country, setCountry] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/address");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "address",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate("/payment");
  };
  return (
    <div className="adress">
      <Helmet>
        <title>adress</title>
      </Helmet>
      <div className="adress__cover"></div>
      <div className="container small-container">
        <h1>Delievery Address</h1>

        <CheckOutSteps step1 step2></CheckOutSteps>
        <Form onSubmit={submitHandler}>
          <FormLabel>Full Name</FormLabel>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <FormLabel>address</FormLabel>
          <Form.Group className="mb-3" controlId="address">
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <FormLabel>city</FormLabel>

          <Form.Group className="mb-3" controlId="city">
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <FormLabel>postal code</FormLabel>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <FormLabel>country</FormLabel>
          <Form.Group className="mb-3" controlId="country">
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AdressScreen;
