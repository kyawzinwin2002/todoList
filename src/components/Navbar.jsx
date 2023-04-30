import React from 'react'
import image from "../img/angel.png"

const Navbar = () => {
  return (
    <div className=" relative  py-20 shadow-lg w-screen flex justify-center items-center bg-[#ffdd00] h-9">
      <h1 className=" text-[35px] font-bold text-[#986841]">
        Make Plans for your Wonderful Day!
      </h1>
      <img
        src={image}
        className=" w-[10rem] h-30 right-[100px] absolute"
        alt=""
      />
    </div>
  );
}

export default Navbar