import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(logout);
  };

  return (
    <div>
      {/* <!------------------------------------------------Desktop Verison--------------------------------------------> */}
      <div className="newNavbarswidthflex">
        <div className="firstnavbarwidthdiv">
          <div className="fordesktop">
            {/* <!----------------------------------First Navbar-------------------------------> */}
            <div className="NavbARDIV">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
              </label>
              <label className="NavbarLOGO">
                <Link to={"/login"}>
                  <img src="./images/Group 1.png" alt="" />
                </Link>
              </label>
              <ul>
                <li>
                  <a href="https://revnitro.com/">Blogs</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Course</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Forum</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Team</a>
                </li>
                <li>
                  <a href="#">Book Service</a>
                </li>
                <li>
                  <a href="#">Bike Resale</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>

                <li>
                  {isAuthenticated ? (
                    <Dropdown className="d-inline">
                      <Dropdown.Toggle
                        variant="default text-white pr-5"
                        id="dropdown-basic"
                      >
                        <figure className="avatar avatar-nav">
                          <Image width="50px" src={user.avatar} />
                        </figure>
                        <span>{user.name}</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {user.role === "admin" && (
                          <Dropdown.Item
                            onClick={() => {
                              navigate("admin/dashboard");
                            }}
                            className="text-dark"
                          >
                            Dashboard
                          </Dropdown.Item>
                        )}

                        <Dropdown.Item
                          onClick={() => {
                            navigate("/myprofile");
                          }}
                          className="text-dark"
                        >
                          Profile
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={() => {
                            navigate("/orders");
                          }}
                          className="text-dark"
                        >
                          Orders
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={LogoutHandler}
                          className="text-danger"
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </li>
              </ul>
            </div>
            {/* <!------------------------------First Navbar--------------------------->
        <!------------------------------Second Navbar---------------------------> */}
            <div className="secondnavbar">
              <div className="secondnavbarflexcontents">
                <div>
                  <Link to="/about" className="itemsinsecond" href="">
                    About
                  </Link>
                </div>
                <div>
                  <Link to="/sellbike" className="itemsinsecond" href="">
                    Sell your bike
                  </Link>
                </div>
                <div>
                  <a className="itemsinsecond" href="">
                    Buy used bike
                  </a>
                </div>
                <div>
                  <Link to="/cart" className="itemsinsecond" href="">
                    My Wishlist
                  </Link>
                </div>
                <div>
                  <Link to="/myaccountpage" className="itemsinsecond" href="">
                    My Account
                  </Link>
                </div>
              </div>
            </div>
            {/* <!------------------------------Second Navbar---------------------------> */}
          </div>
        </div>
      </div>
      {/* <!------------------------------------------------Desktop Verison-------------------------------------------->

  <!------------------------------------------------Mobile Verison-------------------------------------------->
  <!------------------------------------------First Navbar----------------------------------------------------> */}
      <div className="mobilefelesvccdwidth">
        <div className="mobilevsesiosdnwidthhdiv">
          <div className="formobile">
            <div className="navbarDivsa">
              <div className="dropdown">
                <div className="dropdownflexconcept">
                  <div>
                    <button className="dropbtn" onclick="myFunctionsasas()">
                      <span className="namechangingsection">Home</span> &nbsp;
                      <i className="fa fa-caret-down"></i>
                    </button>
                  </div>
                  <div>
                    <img src="./images/Group 64.png" alt="" />
                  </div>
                </div>

                <div className="dropdown-content" id="myDropdown">
                  <a href="https://revnitro.com/">Blog</a>
                  <a href="https://revnitro.com/">Forum</a>
                  <a href="https://revnitro.com/">Course</a>
                  <a href="https://revnitro.com/">Classified</a>
                  <a href="https://revnitro.com/">Shop</a>
                  <a href="https://revnitro.com/">Team</a>
                </div>
              </div>
            </div>

            {/* <!------------------------------------------First Navbar----------------------------------------------------> */}

            {/* <!------------------------------------------Second Navbar----------------------------------------------------> */}
            {/* <!-- Simulate a smartphone / tablet --> */}
            <div className="mobile-container">
              {/* <!-- Top Navigation Menu --> */}
              <div className="topnav">
                <a href="#home" className="active">
                  &nbsp;
                </a>
                <div id="myLinks">
                  <a className="borrderbottomline" href="#news">
                    About
                  </a>
                  <a className="borrderbottomline" href="#contact">
                    Sell your bike
                  </a>
                  <a className="borrderbottomline" href="#about">
                    Buy used bike
                  </a>
                  <a className="borrderbottomline" href="#news">
                    My Wishlist
                  </a>
                  <a className="borrderbottomline" href="#contact">
                    My Account
                  </a>
                </div>
                <a href="#" className="icon" onclick="myFunction12()">
                  <i className="fa fa-bars"></i>
                </a>
              </div>

              {/* <!-- End smartphone / tablet look --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

var namechangingsection = document.getElementsByClassName(
  "namechangingsection"
);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

function bikeresealenamechange() {
  namechangingsection[0].textContent = "Bike Resale";
}
function carresealenamechange() {
  namechangingsection[0].textContent = "Car Resale";
}
function shopsectionnamechange() {
  namechangingsection[0].textContent = "Shop";
}

function myFunction12() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
