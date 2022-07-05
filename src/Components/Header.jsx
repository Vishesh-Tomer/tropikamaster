import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Header = () => {
  return (
    <>
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
              <a className="navbar-brand" href="index.html">
                <img src="assests/images/logo.png" alt="" />
                <span>Tropiko</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <nav class="navbar-nav  ">
                    <nav class="nav-item active">
                      <nav class="nav-link">
                        <span class="sr-only">(current)</span>
                        <Link to="/">Home</Link>
                      </nav>
                    </nav>
                    <nav class="nav-item">
                      <nav class="nav-link">
                        <Link to="/fruits">Fruits</Link>
                      </nav>
                    </nav>
                    <nav class="nav-item">
                      <nav class="nav-link">
                        <Link to="/services ">Services </Link>
                      </nav>
                    </nav>
                    <nav class="nav-item">
                      <nav class="nav-link">
                        <Link to="/contact">Contact us</Link>
                      </nav>
                    </nav>
                  </nav>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    ></button>
                  </form>
                </div>
                <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
                  <a href="#profile">Get A quote</a>
                </div>
              </div>
            </nav>
          </div>
        </header>
    </>
  )
}

export default Header