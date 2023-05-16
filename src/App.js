import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Switch, Route } from "react-router-dom";

function App() {
  return ( 
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/services/" component={Services} />
        <Route exact path="/about/" component={AboutUs} />
        <Route exact path="/contact/" component={ContactUs} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;



//$env:NODE_OPTIONS = "--openssl-legacy-provider"