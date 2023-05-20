import React, { useState, useEffect } from 'react';
import styles from './PostList.module.css'

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={styles.postList}>
      <h1>Post List</h1>
      {posts.map(post => (
        <div key={post.id} className={styles.card}>
          <h2 className={styles.cardTitle}>{post.title}</h2>
          <p className={styles.cardBody}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
