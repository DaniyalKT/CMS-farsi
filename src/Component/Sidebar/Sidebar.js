import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/">
            <AiOutlineHome className="sidebar-icone" />
            صفحه اصلی
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" >
            <MdOutlineProductionQuantityLimits className="sidebar-icone" />
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink to="comments">
            <BiCommentDetail className="sidebar-icone" />
            کامنت ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <FiUsers className="sidebar-icone" />
            کاربران
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <IoBagCheckOutline className="sidebar-icone" />
            سفارشات
          </NavLink>
        </li>
        <li>
          <NavLink to="/offs">
            <FaDollarSign className="sidebar-icone" />
            تخفیف ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
