import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#e8e8e8" }}
      className="page-footer font-small blue"
    >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">ABOUT US</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">FAQ</a>
              </li>
              <li>
                <a href="#!">Anti-Scam</a>
              </li>
              <li>
                <a href="#!">Terms</a>
              </li>
              <li>
                <a href="#!">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">CONTACT & SITEMAP</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Contact Us</a>
              </li>
              <li>
                <a href="#!">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">MY ACCOUNT</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Log In</a>
              </li>
              <li>
                <a href="#!">Register</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">FOLLOW US ON</h5>

            <ul className="list-unstyled">
              <li>
                <a target={"_blank"} rel="noreferrer" href="#">FaceBook</a>
              </li>
              <li>
                <a href="#!">Insta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2021 Shopping Cart. All Rights Reserved.
      </div>
    </footer>
  );
}
