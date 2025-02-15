import React, { useState } from "react";
import Logo from "./asset/Logo.png";
import Cofe from "./asset/Coffee.png";

function Header() {
  const items = ["Home", "About Us", "Features", "Pricing", "Contact Us"];
  const onHover =
    "hover:bg-white hover:h-10 hover:w-[20%] hover:content-center text-center rounded-xl";
  return (
    <>
      <nav className="bg-[#2F1F14] h-96 w-[100%] flex px-14">
        <img className="h-56" src={Logo} alt="" />

        <ul className="list-none flex h-11 w-[50%] bg-[#6F4436] gap-x-9 justify-center mt-16 items-center z-50">
          {items.map((item, index) => (
            <li className={onHover} key={index}>
              <a href="##">{item}</a>
            </li>
          ))}
        </ul>
        <img
          className="h-96 translate-x-[18.8pc] absolute z-0"
          src={Cofe}
          alt=""
        />
      </nav>
      <div className="absolute translate-y-[-13pc] text-white ml-64 text-center ">
        <h1 className="font-Marvel text-6xl">Coffee Makes Mood</h1>
        <p className="font-Pacifico">
          Indulge in Every Sip: Experience the Richness of Coffee
        </p>
      </div>
    </>
  );
}
export default Header;
