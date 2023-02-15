import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';
import { BsFillMicFill } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';

const Navbar = () => (
  <div className="navbar ps-4 pt-2 pb-2 pe-4">
    <NavLink to="/">
      <SlArrowLeft />
    </NavLink>

    <p>THE NOBEL PRIZE</p>
    <div className="navMicSetting">
      <BsFillMicFill />
      <AiTwotoneSetting />
    </div>
  </div>
);

export default Navbar;
