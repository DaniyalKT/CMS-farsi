import React from "react";
import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <a href="#">
            <AiOutlineHome className="sidebar-icone" />
            صفحه اصلی
          </a>
        </li>
        <li className="active">
          <a href="#">
            <MdOutlineProductionQuantityLimits  className="sidebar-icone"/>
            محصولات
          </a>
        </li>
        <li>
          <a href="#">
            <BiCommentDetail className="sidebar-icone" />
            کامنت ها
          </a>
        </li>
        <li>
          <a href="#">
            <FiUsers className="sidebar-icone"/>
            کاربران</a>
        </li>
        <li>
          <a href="#">
            <IoBagCheckOutline className="sidebar-icone" />
            سفارشات</a>
        </li>
        <li>
          <a href="#">
            <FaDollarSign className="sidebar-icone" />
            تخفیف ها</a>
        </li>
      </ul>
    </div>
  );
}
