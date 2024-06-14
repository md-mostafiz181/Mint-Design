import React from "react";
import logo from "../../assets/logo.svg";
import Container from "../../components/Container/Container";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="mr-2 primaryFont capitalize font-bold text-[#83DEB2]">
        <a>What We do</a>
      </li>
      <li className="mr-2 primaryFont capitalize font-bold text-[#83DEB2]">
        <a>About Us</a>
      </li>
      <li className="mr-2 primaryFont capitalize font-bold text-[#83DEB2]">
        <a>Our work</a>
      </li>
      <li className="mr-2 primaryFont capitalize font-bold text-[#83DEB2]">
        <a>Inside minds</a>
      </li>
      <li className="mr-2 primaryFont capitalize font-bold text-[#83DEB2]">
        <a>Blogs</a>
      </li>
      <li className="mr-2 primaryFont capitalize font-bold text-[#83DEB2]">
        <a>contact Us</a>
      </li>
    </>
  );
  return (
    <div className="fixed z-10 w-full bg-[#028065c0]">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className="">
              <img className="w-[200px] h-[50px]" src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
