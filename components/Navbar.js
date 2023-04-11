import Link from "next/link";
import NavItem from "./NavItem"
import React from 'react';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
];
const Navbar = () => {
  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>

          <h1 className="Nav">Project 2</h1>

        </Link>

        <div className="nav__menu-bar">
            <div></div>
            <div></div>
        </div>

        <div className="nav__menu-list">
            {
                MENU_LIST.map((menu, idx) => {
                    return (
                    <div key={menu.text}>
                       <NavItem {...menu} />
                    </div>
                );
            })}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
