import React from "react";
import Username from "../components/reuseable/Username";
import Age from "../components/reuseable/Age";
import {Link} from "react-router-dom";

const Header = () => {
  //   const a = 4;
  //   const b = 5;
  //   const c = a + b;

  //   const myName = "Samuel";

  return (
    <div>
      <h1>This is the Header</h1>
      <ul>
        < Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <Username name="Peter" />
      <Age myAge={31} />
    </div>
  );
};

export default Header;