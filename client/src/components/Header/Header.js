import React from "react";

const Header = () => {

  return (
    <div className="container">
    <div className="row justify-content-center">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">Admin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/truck/:id">Truck Detail Form</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/truck/:id">Truck Detail</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/schedule">Truck Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signUp">Dashboard</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
    </div>
  );
}


export default Header;

