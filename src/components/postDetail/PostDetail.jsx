import React, { useEffect } from "react";
import keyboard from "../../images/keyboard.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedPost } from "../../redux/actions/postActions";
import "./PostDetail.css";

const PostDetail = () => {
  const posts = useSelector((state) => state.posts);
  const { postsId } = useParams();
  const dispatch = useDispatch;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${postsId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedPost(response.data));
    console.log(response.data);
  };
  useEffect(() => {
   fetchProductDetail();
  },);
  return (
    <div>
      <section class="blog-data-1">
        <div class="info-2">
          <img src={keyboard} alt="pic" />
        </div>
        <div class="blog-text-1">
          <span>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
          <p>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
