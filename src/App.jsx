import React from "react";
import "./App.css";
import Background from "./components/background/Background";

import Blog from "./page/blog/Blog";
import Book from "./page/book/Book";
import Footer from "./page/footer/Footer";
import BookCard from "./components/bookCard/BookCard";
import PageRegister from "./page/register/PageRegister";

const App = () => {
  return (
    <div>
      <Background />
      {/* <Book /> */}
      <BookCard />
      <Blog />

      <Footer />
    </div>
  );
};
export default App;
