import React, { useState } from "react";
import axios from "axios";
import styles from './CreatePost.module.css'

const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post
      );
      console.log(response.data);
      setPost({ title: "", body: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="body"
            value={post.body}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default PostForm;
