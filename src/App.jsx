import React, { useEffect } from "react";

import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const appTitle = "Simple Post App using React with Redux";

function App() {
  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <div className="App">
      <h1>{appTitle}</h1>
      <PostForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
