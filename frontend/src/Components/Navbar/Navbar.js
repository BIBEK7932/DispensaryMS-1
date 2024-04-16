import React from "react";
import './Navbar.css'
function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div className="navbar">
      {/* <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div> */}
        <section>
        <nav className="nav__container">
        <div className="nav__logo">YSS<span>Dispensary</span></div>
        <ul className="nav__links">
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="#">About Us</a></li>
          <li className="link"><a href="/Doctors">Doctors</a></li>
          <li className="link"><a href="/Videoc"  target="_blank">Call Doctor</a></li>
          <li className="link"><a href="/Login1" target="_blank">Login</a></li>
        </ul>
        <button id="btn1">Contact Us</button>
      </nav>
      </section>
    </div>
  );
}

export default NavBar;