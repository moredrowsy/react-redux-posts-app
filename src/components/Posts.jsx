import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/posts.action";

function Posts(props) {
  const { fetchPosts, posts } = props;

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      {posts
        .sort((a, b) => b.id - a.id)
        .map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}

Posts.protoTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
