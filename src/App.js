import React from 'react';
import { Route } from 'react-router-dom';
import NavbarMain from './Component/Navbar/NavbarMain';
import HomePage from './Pages/Home_Page/HomePage';

function App() {
  return (
    <>
      <NavbarMain />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/product">

      </Route>
      <Route path="/shop">

      </Route>
      <Route path="/categories">

      </Route>
      <Route path="/customized">

      </Route>
      <Route path="/blog">

      </Route>
      <Route path="/whishlist">

      </Route>
      <Route path="/cart">

      </Route>
      <Route path="/login">

      </Route>
    </>
  );
}

export default App;
