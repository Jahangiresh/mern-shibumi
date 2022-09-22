import React, { useEffect } from "react";
import "./login.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Logout from "../components/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../utils";

const Auth = ({ setuserinfo, userinfo }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("passwords do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });
      setuserinfo(localStorage.setItem("userInfo", JSON.stringify({ data })));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  //link ile logine kecmir
  useEffect(() => {
    if (userinfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userinfo]);

  return (
    <div className="auth">
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <div className="auth__content">
        <div className="auth__content__main">
          <div className="auth__content__main__header">
            <div className="auth__content__main__header__image">
              <img
                src="https://static.thenounproject.com/png/2087664-200.png"
                alt="logo"
              />
            </div>
            <h1>Sign Up</h1>
            {/* <Logout /> */}
          </div>

          <Formik
            // initialValues={{ email: "", password: "" }}
            // validate={(values) => {
            //   const errors = {};
            //   if (!values.email) {
            //     errors.email = "Required";
            //   } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //   ) {
            //     errors.email = "Invalid email address";
            //   }
            //   return errors;
            // }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form
                className="formik__class"
                onSubmit={submitHandler}
                method="POST"
              >
                <span>name</span>
                <Field
                  className="field__inp"
                  type="name"
                  name="name"
                  // value={user.email}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <ErrorMessage name="username" component="div" />
                <span>email</span>
                <Field
                  className="field__inp"
                  type="username"
                  name="email"
                  // value={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <ErrorMessage name="username" component="div" />
                <span>password</span>
                <Field
                  className="field__inp"
                  type="password"
                  name="password"
                  // value={user.password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>confirm password</span>
                <Field
                  className="field__inp"
                  type="password"
                  name="confirmpassword"
                  // value={user.password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <ErrorMessage name="password" component="div" />
                <button
                  className="register__btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>

                <p className="new__costumer">
                  new costumer?{" "}
                  <span>
                    <Link to={`/signup?redirect=${redirect}`}>
                      create an account
                    </Link>
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Auth;
