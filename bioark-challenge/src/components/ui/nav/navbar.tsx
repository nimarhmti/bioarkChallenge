import React from "react";
import { Avatar } from "../../../assets/icons/avatar/avatar";
import { Notification } from "../../../assets/icons/general/Notification";
import { LoginIcon } from "../../../assets/icons/login/LoginIcon";
import { Logo } from "../../../assets/icons/brand/Logo";

export const Navbar = () => {
  return (
    <nav className="nav flex items-center justify-between">
      <div className="flex gap-x-2 items-center h-full">
        <a href="#" className="text-2xl text-white font-medium">
          bioArk
        </a>
        <div className="content">
          <LoginIcon />
        </div>
      </div>
      <div className="flex gap-x-2 items-center h-full">
        <div className="content ">
          <button className="btn btn-success ">مرکز پشتیبانی</button>
        </div>
        <div className="content ">
          <button className="btn btn-primary ">مرکز پشتیبانی</button>
        </div>
        <div className="content ">
          <button className="btn btn-primary ">مرکز پشتیبانی</button>
        </div>
        <span className="content">Fa</span>
        <div className="content">
          <Notification />
        </div>
        <div className="content">
          <Avatar />
        </div>
      </div>
    </nav>
  );
};
