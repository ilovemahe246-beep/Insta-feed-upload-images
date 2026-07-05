import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://ik.imagekit.io/jt6m8s71q/image-1783185004203_DEmCpzpAZU.jpg",
      caption: "hello cutie 💖",
    },
    {
      _id: "2",
      image:
        "https://ik.imagekit.io/jt6m8s71q/image-1783182794116_hpiCTXc6M.jpg",
      caption: "soft vibes 🌸",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://insta-feed-upload-images-3.onrender.com/create-post")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="feed-container">
      <h2 className="feed-title">✨ My Cute Feed</h2>

      <Link to="/create-post">
        <button>Create Post</button>
      </Link>

      <div className="feed-grid">
        {posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img src={post.image} alt="post" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;