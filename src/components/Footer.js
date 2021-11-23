/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Row } from "react-bootstrap";
import "./styles/style.css";

function Footer() {
  return (
    <footer sticky="bottom">
      <div className="footer">
        <ul className="navbar-nav list-inline footNav">
          <li className="nav-item" style={{ fontSize: 25 }}>
            Find me on:
            <h1 className="d-flex justify-content-around footerBottom">
              <a
                href="https://www.linkedin.com/in/jesse-moniz-98693621a/"
                className="card-link"
              ><i className="fab fa-linkedin"></i></a>
              
              <a href="https://github.com/jmoniz155" className="card-link"><i className="fab fa-github"></i></a>
              
              <a
                href="https://www.facebook.com/jesse.moniz.96"
                className="card-link"
              ><i className="fab fa-facebook"></i></a>
              <a
                href="https://stackoverflow.com/users/16738506/jesse-moniz"
                className="card-link"
              ><i className="fab fa-stack-overflow"></i></a>
              
            </h1>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
