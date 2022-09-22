import React from "react";
import "./imagesbox.scss";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
const Imagesbox = () => {
  return (
    <>
      <div className="imagebox">
        <div className="imagebox__prod"></div>
        <div className="imagebox__woman"></div>
        <div className="imagebox__title">
          <h2>Thought for maximum results without irritation.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <div className="imagebox__scroller__title">
          <marquee scrollamount="100" behavior="scroll" direction="left">
            <h1>skin care</h1>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Imagesbox;
