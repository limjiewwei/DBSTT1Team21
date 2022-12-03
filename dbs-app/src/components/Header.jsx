import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function Signout(){
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    
    delete axios.defaults.headers.common["Authorization"];
    navigate("/login")
  }
    return <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
    <div className="container-fluid d-flex align-items-center">
      <h1 className="d-flex align-items-center fs-4 text-white mb-0">
        <img src="logo.png"  height="60" className="me-3" alt="DBS"/>
        Digibank
      </h1>
      <a href="/" onClick={Signout} className="ms-auto link-light" hrefLang="ar">Sign out</a>
    </div>
  </header>
}

export default Header;