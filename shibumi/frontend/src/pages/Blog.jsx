import React from "react";
import "./blog.scss";
import { Link } from "react-router-dom";

// import {
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   MoveOut,
//   Sticky,
//   Animator,
// } from "react-scroll-motion";

const Blog = () => {
  return (
    <div className="blog">
      {/* <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -2000))}> */}
      <div className="blog">
        <div className="blog__cover">
          <img
            src="https://assets.website-files.com/5d89d4faecc118086c3813ec/5d8b79a3243dbfa685954e93_joanna-kosinska-ToV0rS9nTYs-unsplash.jpg"
            alt="cover img"
          />
        </div>
      </div>
      {/* </Animator>
        </ScrollPage>
      </ScrollContainer> */}

      <div className="latestposts m-0 latestposts__blog">
        <div className="latestposts__container container">
          <div className="latestposts__container__title row">
            <p>beauty news and posts</p>
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
    </div>
  );
};

export default Blog;
