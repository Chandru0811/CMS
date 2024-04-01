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
        icon: <CgWebsite className="metismenu-icon" />,
        subMenus: [
          { title: "Common", path: "/admin/common" },
          { title: "Home", path: "/admin/home" },
          { title: "About", path: "/admin/about" },
          { title: "Service", path: "/admin/service" },
          { title: "Why Choose Us", path: "/admin/whychooseus" },
          { title: "Legal", path: "/admin/legal" },
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
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              data-className="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu mt-4">
            <li>
              <NavLink to="/" activeClassName="active">
                <MdOutlineDashboardCustomize className="metismenu-icon" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/review" activeClassName="active">
                <MdOutlineRateReview className="metismenu-icon" />
                Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/doctor" activeClassName="active">
                <FaStethoscope className="metismenu-icon" />
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
                      <i className="metismenu-state-icon fa-solid fa-angle-down caret-left"></i>
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
