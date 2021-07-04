import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const appTitle = "Simple Post App using React with Redux";

function App() {
  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>{appTitle}</h1>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
