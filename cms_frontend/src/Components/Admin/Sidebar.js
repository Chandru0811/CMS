/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

function Sidebar() {
  return (
    <div class="app-sidebar sidebar-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
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
          <ul class="vertical-nav-menu mt-4">
            {/* <li class="app-sidebar__heading">Dashboards</li> */}
            <li>
              <Link to="/">
                <MdOutlineDashboardCustomize class="metismenu-icon" />
                Dashboard
              </Link>
            </li>
            {/* <li class="app-sidebar__heading">UI Components</li> */}
            <li>
              <Link href="#">
                <CgWebsite class="metismenu-icon" />
                Pages
                <i class="metismenu-state-icon fa-solid fa-angle-down caret-left"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/admin/home">
                    <i class="metismenu-icon"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="admin/about">
                    <i class="metismenu-icon"></i>About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
