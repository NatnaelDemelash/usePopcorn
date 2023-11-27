import React from "react";
import logo from "../assets/logo.png";

function NavBar({ query, movies }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">
          <img src={logo} alt="Logo" />
        </span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
