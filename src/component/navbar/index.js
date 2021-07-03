import React from "react";
import "../../style.css"
import "../../tailwind.css"
import Left from './components/left'
import Center from './components/center'
import Right from './components/right'

const Nav = () => {
  return (
    <>
      <nav className="navbar grid grid-cols-6 shadow-lg">
        <Left/>
        <Center/>
        <Right/>
      </nav>
    </>
  );
}

export default Nav;
