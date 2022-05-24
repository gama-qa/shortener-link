import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn1.iconfinder.com/data/icons/ecommerce-45/64/Ecommerce_159-256.png"
              width={30}
              height={30}
              loading={"lazy"}
              style={{ background: "white" }}
            />
          </Link>
          <Link className="navbar-brand" to="/">
            Shortener Link - gamacodes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
