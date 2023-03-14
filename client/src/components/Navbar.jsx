import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BRIGHT- FOOD ORDER
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Giriş Yap <i class="fa-solid fa-right-to-bracket"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Kayıt Ol <i class="fa-solid fa-registered"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sepet">
                  Sepet
                  <i className="fa-solid fa-bag-shopping mx-2"></i>
                  <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger">
                    {cartState.cartItems.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
