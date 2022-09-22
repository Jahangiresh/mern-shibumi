import React from "react";
import "./latestposts.scss";
import { Link } from "react-router-dom";
const Latestposts = () => {
  return (
    <div className="latestposts ">
      <div className="latestposts__container container">
        <div className="latestposts__container__title row">
          <p className="p-0">beauty news and posts</p>
          <h2 className="p-0">latest posts & updates</h2>
        </div>
        <div className="latestposts__container__posts row">
          <div className="latestposts__container__posts__col col-lg-4 col-md-6 col-12">
            <div className="post__title">
              <h2>
                Look younger, <br />
                longer
              </h2>
              <p>September 25,2019</p>
              <span>
                <Link className="link" to="/blog/details">
                  view more
                </Link>
              </span>
            </div>
          </div>
          <div className="latestposts__container__posts__col2 col-lg-4 col-md-6 col-12">
            <div className="post__title">
              <h2>
                Look younger, <br />
                longer
              </h2>
              <p>September 25,2019</p>
              <span>
                <Link className="link" to="/blog/details">
                  view more
                </Link>
              </span>
            </div>
          </div>
          <div className="latestposts__container__posts__col3 col-lg-4 col-md-6 col-12">
            <div className="post__title">
              <h2>
                Look younger, <br />
                longer
              </h2>
              <p>September 25,2019</p>
              <span>
                <Link className="link" to="/blog/details">
                  view more
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestposts;
