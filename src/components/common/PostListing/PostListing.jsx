import React, { useEffect } from "react";
import keyboard from "../../../images/keyboard.png";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../redux/actions/postActions";
import "./PostListing.css";
import PostComponent from "../PostComponent/PostComponent";
import Title from "../../Title/Title";
import axios from "axios";

const PostListing = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setPosts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },);
  console.log("Posts:", posts);
  return (
    <section className="blog">
      <Title />
      <div className="info-1">
        <img src={keyboard} alt="" />
        <div className="about">
          <div className="about-date">October 21st 2021</div>
          <div className="about-body">
            <h3>
              Tentang <br />
              creative <br />
              Bock UI <br />
              design
            </h3>
          </div>
          <div className="par">
            <p>
              Beberapa cara yang saya lakukan ketika tidak <br />
              memiliki ide atau bingung untuk memulai <br />
              design
            </p>
          </div>
        </div>
      </div>

      <div className="blog-post">
        <PostComponent />
      </div>
    </section>
  );
};

export default PostListing;
