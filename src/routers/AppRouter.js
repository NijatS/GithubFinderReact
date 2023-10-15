import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <NavLink exact to="/" activeclassname="active">
        Home|
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        Contact|
      </NavLink>
      <NavLink exact to="/product" activeclassname="active">
        Product|
      </NavLink>
      <NavLink to="/product/12" activeclassname="active">
        Product Detail
      </NavLink>
    </nav>
  );
};
const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
    </>
  );
};
const ContactPage = () => {
  return (
    <>
      <div>ContactPage</div>
    </>
  );
};
const ProductPage = () => {
  return (
    <>
      <div>ProductPage</div>
    </>
  );
};
const ProductDetailPage = (props) => {
  return (
    <>
      <div>ProductDetail Page</div>
      <div>ID: {props.match.params.id}</div>
    </>
  );
};
const NotFoundPage = () => {
  return (
    <>
      <div>NotFoundPage</div>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/product" component={ProductPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
