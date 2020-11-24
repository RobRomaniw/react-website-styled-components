import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./components";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
