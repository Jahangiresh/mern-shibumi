import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import ip from "../images/logoWHITE.png";

import Menuslider from "../Menuslider";
import "./header.scss";
import { useState } from "react";
import Cartmodal from "../Cartmodal";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Header = ({ count, setCount, setrerender, rerender, userinfo }) => {
  let LOCALproducts = JSON.parse(localStorage.getItem("products"));

  const [Slider, setSlider] = useState(false);
  const [Modal, setModal] = useState(false);

  const menuSliderHandler = (e) => {
    setSlider((value) => !value);

    Slider
      ? e.target.classList.remove("plusIconActive")
      : e.target.classList.add("plusIconActive");
  };

  const signOutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("address");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  return (
    <>
      <div className="upper__header">
        <div className="upper__header__row row">
          <div className="upper__header__row__left col-5"></div>
          <div className="upper__header__row__interP col-2">
            <img src={ip} alt="inpng" />
          </div>
          <div className="upper__header__row__right col-5"></div>
        </div>
      </div>

      <Menuslider sliderproops={Slider} />
      <div className="header">
        <div className="header__container container">
          <div className="header__container__row row">
            <div className="header__container__row__navs col-6   ">
              <ul className="header__container__row__navs__ul">
                <li>
                  <Link className="navs__link" to="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link className="navs__link" to="/about">
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="navs__link" to="/shop">
                    shop
                  </Link>
                </li>
                <li>
                  <Link className="navs__link" to="/blog">
                    blog
                  </Link>
                </li>
                <li>
                  <Link className="navs__link" to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__container__row__right col-6">
              <ul>
                {userinfo ? (
                  <NavDropdown
                    className="sing__name"
                    title={userinfo.data.name}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/profile">User Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/orderhistory">Order History</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <li>
                      <Link to="#signout" onClick={signOutHandler}>
                        sign out
                      </Link>
                    </li>
                  </NavDropdown>
                ) : (
                  <ul>
                    <li>
                      <Link className="sing__links" to="/signin">
                        signin <FiLogIn />
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="cart m-0">
                  <Cartmodal
                    modalproops={Modal}
                    count={count}
                    setcount={setCount}
                    setrerender={setrerender}
                    rerender={rerender}
                  />

                  {LOCALproducts && LOCALproducts.length > 0 ? (
                    <span className="cart__count">{LOCALproducts.length}</span>
                  ) : null}
                </li>
                <li className="plus d-lg-none d-md-none">
                  <AiOutlinePlus
                    className="plusIcon"
                    onClick={menuSliderHandler}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
