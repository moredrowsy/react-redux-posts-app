import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../store/actions/posts.action";

function PostForm(props) {
  const { addPost } = props;
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const onChangeHandle = (e) =>
    setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const postRes = await res.json();
      addPost(postRes);
    } catch (e) {
      console.log("Fail to fetch::post post");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <div>
          <h3>Create Post</h3>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={post.title}
            onChange={onChangeHandle}
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <br />
          <textarea
            name="body"
            id="body"
            value={post.body}
            onChange={onChangeHandle}
            style={{
              width: "100%",
              marginBottom: "10px",
            }}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

PostForm.protoTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
