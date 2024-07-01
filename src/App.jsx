import React from 'react';
import './App.css';
import Background from './components/background/Background';
import BookCard from './components/bookCard/BookCard';
// import Login from './page/login/LoginPage';
// import LoginPage from './page/login/LoginPage';
// import Blog from './page/blog/Blog';
// import PageRegister from './page/register/PageRegister';
const App = () => {
  return (
    <div>
      <Background />
      <BookCard />
     {/* <Blog /> */}
     {/* <PageRegister /> */}
    </div>
  );
}
export default App;


