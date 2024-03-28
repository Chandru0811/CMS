/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import {
  MdOutlineDashboardCustomize,
  MdOutlineRateReview,
} from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Logo from "../../Assets/Logo.png";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const updatedMenuItems = [
      {
        title: "Pages",
        icon: <CgWebsite class="metismenu-icon" />,
        subMenus: [
          { title: "Home", path: "/admin/home" },
          { title: "About", path: "/admin/about" },
          { title: "Service", path: "/admin/service" },
        ],
      },
      // Add other menu items similarly
    ];

    setMenuItems(updatedMenuItems);
  }, []);

  const handleMenuClick = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };
  return (
    <div class="app-sidebar sidebar-shadow">
      <div class="app-header__logo">
        <div class="logo-src">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
        <div class="header__pane ml-auto">
          <div>
            <button
              type="button"
              class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button
            type="button"
            class="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button
            type="button"
            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="scrollbar-sidebar">
        <div class="app-sidebar__inner">
          <ul className="vertical-nav-menu mt-4">
            <li>
              <NavLink to="/" activeClassName="active">
                <MdOutlineDashboardCustomize class="metismenu-icon" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/review" activeClassName="active">
                <MdOutlineRateReview class="metismenu-icon" />
                Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/doctor" activeClassName="active">
                <FaStethoscope class="metismenu-icon" />
                Doctors
              </NavLink>
            </li>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subMenus.length > 0 ? (
                  <>
                    <a
                      href="#"
                      onClick={() => handleMenuClick(item.title)}
                      className={activeMenu === item.title ? "active" : ""}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      <i class="metismenu-state-icon fa-solid fa-angle-down caret-left"></i>
                    </a>
                    <Collapse in={activeMenu === item.title}>
                      <ul className="submenu">
                        {item.subMenus.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavLink to={subItem.path} activeClassName="active">
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  </>
                ) : (
                  <NavLink to={item.path} activeClassName="active">
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
