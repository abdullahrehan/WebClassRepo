import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div className="border bg-light p-3">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item bg-light">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{ fontSize: "13px" }}
            >
              My Account
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <Link
              to="/u"
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Personal Home
            </Link>
          </div>
        </div>

        <div className="accordion-item bg-light">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{ fontSize: "13px" }}
            >
              Orders
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <Link
              to={`/order/history`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              History
            </Link>
            <Link
              to={`/order/active`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              Active
            </Link>
          </div>
        </div>

        <div className="accordion-item  bg-light">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{ fontSize: "13px" }}
            >
              User
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse my-2"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <Link
              to={`/users`}
              style={{ width: "100%" }}
              className="btn border mb-1 bg-white"
            >
              <FontAwesomeIcon icon={faUser} /> Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
