import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
 
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/about" component={AboutMe} />
        <Route path="/projects" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
