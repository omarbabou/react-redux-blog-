import React from "react";
import { Link } from "react-router-dom";
import keyboard from "../../../images/keyboard.png";
import { useSelector } from "react-redux";
import "./PostComponent.css";

const PostComponent = () => {
  const posts = useSelector((state) => state.allposts.posts);
  const renderList = posts.map((post) => {
    const { title, body } = post;
    return (
      <div className="blog-card" key={title}>
        <Link to="/posts/: postsId">
          <div className="blog-box">
            <div className="blog-img">
              <img src={keyboard} alt="pic" />
            </div>
            <br />
            <div className="blog-text">
              <span>Maret 05, 2021</span>
              <h1 className="blog-title">{title}</h1>
              <p>{body}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default PostComponent;
