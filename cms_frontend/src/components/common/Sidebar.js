import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav } from "react-bootstrap";
import Logo from "../../assets/images/Logo.png";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const storedScreens = JSON.parse(sessionStorage.getItem("screens") || "{}");

    // Define your menu items based on screen access values
    const updatedMenuItems = [
      {
        title: "Centre Management",
        icon: "bx bx-box",
        isOpen: false,
        subMenus: [
          {
            title: "Centre Listing",
            path: "/center",
            access: storedScreens.centerListingIndex,
          },
        ],
      },
      {
        title: "Course Management",
        icon: "bx bx-book-alt",
        isOpen: false,
        subMenus: [
          { title: "Level", path: "/level", access: storedScreens.levelIndex },
          {
            title: "Subject",
            path: "/subject",
            access: storedScreens.subjectIndex,
          },
          {
            title: "Course",
            path: "/course",
            access: storedScreens.courseIndex,
          },
          { title: "Class", path: "/class", access: storedScreens.classIndex },
        ],
      },

      // {
      //   title: "Campaign",
      //   icon: "bx bx-box",
      //   isOpen: false,
      //   subMenus: [{ title: "Campaign", path: "/campaign" }],
      // },
      {
        title: "Lead Management",
        icon: "bx bx-pie-chart-alt-2",
        isOpen: false,
        subMenus: [
          {
            title: "Lead Listing",
            path: "lead/lead",
            access: storedScreens.leadListingIndex,
          },
          {
            title: "Enrollment",
            path: "/lead/enrollment",
            access: storedScreens.enrollmentIndex,
          },
        ],
      },
      {
        title: "Staffing",
        icon: "bx bx-coin-stack",
        isOpen: false,
        subMenus: [
          {
            title: "Staff",
            path: "/staff",
            access: storedScreens.staffIndex,
          },
          {
            title: "Teacher",
            path: "/teacher",
            access: storedScreens.teacherIndex,
          },
          {
            title: "Role & Matrix",
            path: "/role/add",
            access: storedScreens.rolesMatrixIndex,
          },
        ],
      },
      {
        title: "Student Management",
        icon: "bx bx-book-open",
        isOpen: false,
        subMenus: [
          {
            title: "Student Listing",
            path: "/student",
            access: storedScreens.studentListingIndex,
          },
          {
            title: "Attendance",
            path: "/attendance",
            access: storedScreens.attendanceIndex,
          },
        ],
      },
      {
        title: "Schedule",
        icon: "bx bx-receipt",
        isOpen: false,
        subMenus: [
          {
            title: "Time Schedule",
            path: "/scheduleteacher",
            access: storedScreens.scheduleTeacherIndex,
          },
          // { title: "Make Up Class", path: "/reschedule" },
          // Add more submenus as needed
        ],
      },
      {
        title: "Document Management",
        icon: "bx bx-receipt",
        isOpen: false,
        subMenus: [
          {
            title: "Document Folder",
            path: "/document",
            access: storedScreens.documentListingIndex,
          },
          {
            title: "Document Files",
            path: "/documentfile",
            access: storedScreens.documentFileIndex,
          },
          // Add more submenus as needed
        ],
      },
      {
        title: "Invoice and Payment",
        icon: "bx bx-receipt",
        isOpen: false,
        subMenus: [
          {
            title: "Invoice",
            path: "/invoice",
            access: storedScreens.invoiceIndex,
          },
          {
            title: "Payment",
            path: "/payment",
            access: storedScreens.paymentIndex,
          },
          // Add more submenus as needed
        ],
      },

      {
        title: "Report Management",
        icon: "bx bx-food-menu",
        isOpen: false,
        subMenus: [
          {
            title: "Document Report",
            path: "/report/document",
            access: storedScreens.documentReportIndex,
          },
          {
            title: "Attendance Report",
            path: "/report/attendance",
            access: storedScreens.attendanceReportIndex,
          },
          {
            title: "Student Report",
            path: "/report/studentreport",
            access: storedScreens.studentReportIndex,
          },
          {
            title: "Assessment Report",
            path: "/report/assessment",
            access: storedScreens.assessmentReportIndex,
          },
          {
            title: "Enrolment Report",
            path: "/report/enrolment",
            access: storedScreens.enrollmentReportIndex,
          },
          {
            title: "Fee Collection Report",
            path: "/report/fee",
            access: storedScreens.feeCollectionReportIndex,
          },
          {
            title: "Package Balance Report",
            path: "/report/package",
            access: storedScreens.packageBalanceReportIndex,
          },
          {
            title: "Sales Revenue Report",
            path: "/report/sales",
            access: storedScreens.salesRevenueReportindex,
          },
          {
            title: "Replace Class Lesson List",
            path: "/report/replace_class",
            access: storedScreens.replaceClassLessonListindex,
          },
        ],
      },
      // Add other menu items similarly
    ];

    setMenuItems(updatedMenuItems);
  }, []);

  const handleMenuClick = (index) => {
    if (index === null) {
      // If Home is clicked, deactivate all menus
      setMenuItems(menuItems.map((item) => ({ ...item, isOpen: false })));
      setActiveMenu(null);
    } else {
      const updatedMenuItems = menuItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        } else {
          return {
            ...item,
            isOpen: false,
          };
        }
      });
      setMenuItems(updatedMenuItems);
      setActiveMenu(
        updatedMenuItems[index].isOpen ? updatedMenuItems[index].title : null
      );
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <span className="logo_name">
          <img src={Logo} alt="logo" className="img-fluid" />
        </span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" onClick={() => handleMenuClick(null)}>
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Home</span>
          </NavLink>
        </li>
        {menuItems.map(
          (item, index) =>
            item.subMenus.some((subMenu) => subMenu.access) && (
              <li key={index}>
                <Nav.Link
                  to="#"
                  onClick={() => handleMenuClick(index)}
                  className={activeMenu === item.title ? "active" : ""}
                >
                  <div
                    className="w-100 d-flex justify-content-between"
                    style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                  >
                    <span>
                      <i className={item.icon}></i>
                      <span className="links_name">{item.title}</span>
                    </span>
                    <span>
                      <i
                        className={`bx bx-chevron-down arrow ${
                          item.isOpen ? "open" : ""
                        }`}
                        style={{
                          paddingRight: "5px",
                          minWidth: "0px",
                          fontWeight: "700",
                        }}
                      ></i>
                    </span>
                  </div>
                </Nav.Link>

                <Collapse in={item.isOpen}>
                  <ul className="submenu">
                    {item.subMenus.map(
                      (subMenu, subIndex) =>
                        subMenu.access && (
                          <li key={subIndex}>
                            <NavLink
                              to={subMenu.path}
                              className="links_name"
                              activeClassName="active-submenu"
                            >
                              <i className="bx bx-radio-circle-marked"></i>
                              <span className="links_name links_names">
                                {subMenu.title}
                              </span>
                            </NavLink>
                          </li>
                        )
                    )}
                  </ul>
                </Collapse>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Sidebar;