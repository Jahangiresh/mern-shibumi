import React from "react";
import "../components/menuslider.scss";
import { useRef, useEffect } from "react";

import { Link } from "react-router-dom";
const Menuslider = ({ sliderproops }) => {
  const sliderActive = useRef();
  const menuImage = useRef();

  const menuCloser = () => {
    sliderActive.current.classList.remove("slideractive");
  };
  useEffect(() => {
    if (sliderproops) {
      sliderActive.current.classList.add("slideractive");
      setTimeout(() => {
        menuImage.current.classList.add("right__active");
      }, 500);
    } else {
      sliderActive.current.classList.remove("slideractive");
      menuImage.current.classList.remove("right__active");
    }
  }, [sliderproops]);

  return (
    <div ref={sliderActive} className="menuslider">
      <div className="menuslider__container ">
        <div className="menuslider__container__row">
          <div className="menuslider__container__row__ul col-6">
            <ul className="menuslider__ul">
              <li onClick={menuCloser} className="li nav__li">
                <Link className="links" to="/">
                  <h1>Home page</h1>
                </Link>
                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li onClick={menuCloser} className="li nav__li">
                <Link className="links" to="/about">
                  <h1>About us</h1>
                </Link>
                <p>Lorem ipsum dolor sit.</p>
              </li>

              <li onClick={menuCloser} className="nav__li">
                <Link className="links" to="/shop">
                  {" "}
                  <h1>Shop</h1>
                </Link>

                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li onClick={menuCloser} className="nav__li">
                <Link className="links" to="/blog">
                  {" "}
                  <h1>Blog</h1>
                </Link>

                <p>Lorem ipsum dolor sit.</p>
              </li>
              <li onClick={menuCloser} className="nav__li">
                <Link className="links" to="/contact">
                  {" "}
                  <h1>Contact</h1>
                </Link>

                <p>Lorem ipsum dolor sit.</p>
              </li>

              <p className="copywrites">
                © Copyrights 2022 Jahangir Shirinov | All rights reserved
              </p>
            </ul>
          </div>
          <div
            ref={menuImage}
            className="menuslider__container__row__right col-6 "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Menuslider;
