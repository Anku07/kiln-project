import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-dark bg-dark">
        <span className="navbar-brand mb-1 mx-4 h1">Vuexy</span>

        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="#">
            <img src="add.png" width="30" height="30" alt="add icon" />
          </a>

          <form className="form d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="button" className="btn btn-outline-info mx-2">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}