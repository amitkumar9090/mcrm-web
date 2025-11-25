"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // <-- import useRouter and usePathname
import Link from "next/link";
import { logout } from "../services/api";
import { isAuthenticated } from "../utils/auth";

export default function Header() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const pathname = usePathname();

  const normalize = (p) => (p ? p.replace(/\/+$|^\s+|\s+$/g, "") : "");

  const checkActive = (href) => {
    const np = normalize(pathname || "");
    const nh = normalize(href || "");
    return np === nh || (nh && np.startsWith(nh + "/"));
  };

  useEffect(() => {
    // Check authentication and get token
    if (!isAuthenticated()) {
      router.replace("/login"); // Redirect if not logged in
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, [router]);

  const handleLogout = async () => {
    localStorage.removeItem("token");

    // Optionally clear cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login
    router.push("/login");
    // try {
    //   if (token) {
    //     await logout(token); // Call logout API
    //   }
    //   localStorage.removeItem("token"); // Remove token from localStorage
    //   router.replace("/login"); // Redirect to login page
    // } catch (err) {
    //   console.error("Logout failed:", err);
    // }
  };

  return (
    <>
      <header className="navbar-header">
        <div className="page-container topbar-menu">
          <div className="d-flex align-items-center gap-2">
            {/* Logo */}
            <a href="inde" className="logo">
              {/* Logo Normal */}
              <span className="logo-light">
                <span className="logo-lg">
                  <img src="/assets/img/logo.svg" alt="logo" />
                </span>
                <span className="logo-sm">
                  <img src="/assets/img/logo-small.svg" alt="small logo" />
                </span>
              </span>
              {/* Logo Dark */}
              <span className="logo-dark">
                <span className="logo-lg">
                  <img src="/assets/img/logo-white.svg" alt="dark logo" />
                </span>
              </span>
            </a>
            {/* Sidebar Mobile Button */}
            <a id="mobile_btn" className="mobile-btn" href="#sidebar">
              <i className="ti ti-menu-deep fs-24" />
            </a>
            <button
              className="sidenav-toggle-btn btn border-0 p-0"
              id="toggle_btn2"
            >
              <i className="ti ti-arrow-bar-to-right" />
            </button>
            {/* Search */}
            <div className="me-auto d-flex align-items-center header-search d-lg-flex d-none">
              {/* Search */}
              <div
                className="input-icon position-relative me-2"
                suppressHydrationWarning
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Keyword"
                />
                <span className="input-icon-addon d-inline-flex p-0 header-search-icon">
                  <i className="ti ti-command" />
                </span>
              </div>
              {/* /Search */}
            </div>
          </div>
          <div className="d-flex align-items-center">
            {/* Search for Mobile */}
            <div className="header-item d-flex d-lg-none me-2">
              <button
                className="topbar-link btn"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                type="button"
              >
                <i className="ti ti-search fs-16" />
              </button>
            </div>
            {/* Minimize */}
            <div className="header-item">
              <div className="dropdown me-2">
                <a
                  href="javascript:void(0);"
                  className="btn topbar-link btnFullscreen"
                >
                  <i className="ti ti-maximize" />
                </a>
              </div>
            </div>
            {/* Minimize */}
            <div className="header-line" />
            {/* message */}
            {/* <div className="header-item">
            <div className="dropdown me-2">
              <a href="cha" className="btn topbar-link">
                <i className="ti ti-message-circle-exclamation" />
                <span className="badge rounded-pill">14</span>
              </a>
            </div>
          </div> */}
            {/* Notification Dropdown */}
            <div className="header-item">
              <div className="dropdown me-2">
                <button
                  className="topbar-link btn topbar-link dropdown-toggle drop-arrow-none"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,24"
                  type="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="ti ti-bell-check fs-16 animate-ring" />
                  <span className="badge rounded-pill">10</span>
                </button>
                <div
                  className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
                  style={{ minHeight: 300 }}
                >
                  <div className="p-2 border-bottom">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fs-16 fw-semibold">
                          {" "}
                          Notifications
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* Notification Body */}
                  <div
                    className="notification-body position-relative z-2 rounded-0"
                    data-simplebar=""
                  >
                    {/* Item*/}
                    <div
                      className="dropdown-item notification-item py-3 text-wrap border-bottom"
                      id="notification-1"
                    >
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <img
                            src="/assets/img/users/user-01.jpg"
                            className="avatar-md rounded-circle"
                            alt="Img"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">John Doe</p>
                          <p className="mb-1 text-wrap">
                            left 6 comments on{" "}
                            <span className="fw-medium text-dark">
                              Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12">
                              <i className="ti ti-clock me-1" />4 min ago
                            </span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <a
                                href="javascript:void(0);"
                                className="notification-read rounded-circle bg-danger"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Make as Read"
                                aria-label="Make as Read"
                              />
                              <button
                                className="btn rounded-circle p-0"
                                data-dismissible="#notification-1"
                              >
                                <i className="ti ti-x" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Item*/}
                    <div
                      className="dropdown-item notification-item py-3 text-wrap border-bottom"
                      id="notification-2"
                    >
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <img
                            src="/assets/img/users/user-12.jpg"
                            className="avatar-md rounded-circle"
                            alt="Img"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">
                            Thomas William
                          </p>
                          <p className="mb-1 text-wrap">
                            “Oh, I finished de-bugging the phones, but the
                            system's compiling for eighteen minutes, or
                            twenty...”
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12">
                              <i className="ti ti-clock me-1" />8 min ago
                            </span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <a
                                href="javascript:void(0);"
                                className="notification-read rounded-circle bg-danger"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Make as Read"
                                aria-label="Make as Read"
                              />
                              <button
                                className="btn rounded-circle p-0"
                                data-dismissible="#notification-2"
                              >
                                <i className="ti ti-x" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Item*/}
                    <div
                      className="dropdown-item notification-item py-3 text-wrap border-bottom"
                      id="notification-3"
                    >
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <img
                            src="/assets/img/profiles/avatar-12.jpg"
                            className="avatar-md rounded-circle"
                            alt="Img"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">
                            Sarah Anderson
                          </p>
                          <p className="mb-1 text-wrap">
                            attached a file to{" "}
                            <span className="fw-medium text-dark">
                              Isla Nublar SOC2 compliance report
                            </span>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12">
                              <i className="ti ti-clock me-1" />
                              15 min ago
                            </span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <a
                                href="javascript:void(0);"
                                className="notification-read rounded-circle bg-danger"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Make as Read"
                                aria-label="Make as Read"
                              />
                              <button
                                className="btn rounded-circle p-0"
                                data-dismissible="#notification-3"
                              >
                                <i className="ti ti-x" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Item*/}
                    <div
                      className="dropdown-item notification-item py-3 text-wrap"
                      id="notification-4"
                    >
                      <div className="d-flex">
                        <div className="me-2 position-relative flex-shrink-0">
                          <img
                            src="/assets/img/profiles/avatar-08.jpg"
                            className="avatar-md rounded-circle"
                            alt="Img"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <p className="mb-0 fw-medium text-dark">
                            Ann McClure
                          </p>
                          <p className="mb-1 text-wrap">
                            mentioned you in{" "}
                            <span className="fw-medium text-dark">
                              Bug Fix Review - Task #432
                            </span>
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-12">
                              <i className="ti ti-clock me-1" />
                              20 min ago
                            </span>
                            <div className="notification-action d-flex align-items-center float-end gap-2">
                              <a
                                href="javascript:void(0);"
                                className="notification-read rounded-circle bg-danger"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Make as Read"
                                aria-label="Make as Read"
                              />
                              <button
                                className="btn rounded-circle p-0"
                                data-dismissible="#notification-4"
                              >
                                <i className="ti ti-x" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* View All*/}
                    <div className="p-2 rounded-bottom border-top text-center">
                      <a
                        href="notification"
                        className="text-center text-decoration-underline fs-14 mb-0"
                      >
                        View All Notifications
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* User Dropdown */}
              <div className="dropdown profile-dropdown d-flex align-items-center justify-content-center">
                <a
                  href="javascript:void(0);"
                  className="topbar-link dropdown-toggle drop-arrow-none position-relative"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,22"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/img/users/user-40.jpg"
                    width={38}
                    className="rounded-1 d-flex"
                    alt="user-image"
                  />
                  <span className="online text-success">
                    <i className="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white" />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
                  <div className="d-flex align-items-center bg-light rounded-3 p-2 mb-2">
                    <img
                      src="/assets/img/users/user-40.jpg"
                      className="rounded-circle"
                      width={42}
                      height={42}
                      alt="Img"
                    />
                    <div className="ms-2">
                      <p className="fw-medium text-dark mb-0">M CRM</p>
                      <span className="d-block fs-13">Super Admin</span>
                    </div>
                  </div>
                  {/* Item*/}
                  <Link
                    href="/master/profile-settings"
                    className="dropdown-item"
                  >
                    <i className="ti ti-user-circle me-1 align-middle" />
                    <span className="align-middle">Profile Settings</span>
                  </Link>
                  {/* item */}
                  <div className="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0">
                    <label className="form-check-label" htmlFor="notify">
                      <i className="ti ti-bell" />
                      Notifications
                    </label>
                    <input
                      className="form-check-input me-0"
                      type="checkbox"
                      role="switch"
                      id="notify"
                    />
                  </div>
                  {/* Item*/}
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-help-circle me-1 align-middle" />
                    <span className="align-middle">Help &amp; Support</span>
                  </a>
                  {/* Item*/}
                  <Link
                    href="/master/profile-settings"
                    className="dropdown-item"
                  >
                    <i className="ti ti-settings me-1 align-middle" />
                    <span className="align-middle">Settings</span>
                  </Link>
                  {/* Item*/}
                  <div className="pt-2 mt-2 border-top">
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      <i className="ti ti-logout me-1 fs-17 align-middle" />
                      <span className="align-middle">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="modal fade" id="searchModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-transparent">
            <div className="card shadow-none mb-0">
              <div
                className="px-3 py-2 d-flex flex-row align-items-center"
                id="search-top"
              >
                <i className="ti ti-search fs-22" />
                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Search"
                />
                <button
                  type="button"
                  className="btn p-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-22" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar" id="sidebar">
        {/* Start Logo */}
        <div className="sidebar-logo">
          <div>
            {/* Logo Normal */}
            <a href="inde" className="logo logo-normal">
              <img src="/assets/img/logo.svg" alt="Logo" />
            </a>
            {/* Logo Small */}
            <a href="inde" className="logo-small">
              <img src="/assets/img/logo-small.svg" alt="Logo" />
            </a>
            {/* Logo Dark */}
            <a href="inde" className="dark-logo">
              <img src="/assets/img/logo-white.svg" alt="Logo" />
            </a>
          </div>
          <button
            className="sidenav-toggle-btn btn border-0 p-0 active"
            id="toggle_btn"
          >
            <i className="ti ti-arrow-bar-to-left" />
          </button>
          {/* Sidebar Menu Close */}
          <button className="sidebar-close">
            <i className="ti ti-x align-middle" />
          </button>
        </div>
        {/* End Logo */}
        {/* Sidenav Menu */}
        <div className="sidebar-inner" data-simplebar="">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main Menu</span>
              </li>
              <li>
                <ul>
                  <li className={checkActive("/master") ? "active" : ""}>
                    <Link href="/master">
                      <i className="ti ti-user-star" />
                      <span>master</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="menu-title">
            <span>Companies</span>
          </li>
          <li>
            <ul>
              <li>
                <Link href="/master/companies">
                  <i className="ti ti-building-community" />
                  <span>List Companies</span>
                </Link>
              </li>
              <li>
                <Link  href="/master/deals">
                  <i className="ti ti-medal" />
                  <span>Deals</span>
                </Link >
              </li>
              <li>
                <Link href="/master/leads">
                  <i className="ti ti-chart-arcs" />
                  <span>Leads</span>
                </Link>
              </li>
              <li>
                <Link href="/master/projects">
                  <i className="ti ti-atom-2" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <a href="/master/invoice">
                  <i className="ti ti-file-invoice" />
                  <span>Invoice</span>
                </a>
              </li>
            </ul>
          </li> */}
              <li className="menu-title">
                <span>User Management</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/user-management/manage-users")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/user-management/manage-users">
                      <i className="ti ti-users" />
                      <span>Manage Users</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/user-management/create-users")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/user-management/create-users">
                      <i className="ti ti-users" />
                      <span>Create Users</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/user-management/roles-permissions")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/user-management/roles-permissions">
                      <i className="ti ti-user-shield" />
                      <span>Roles &amp; Permissions</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/user-management/kyc-approvals")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/user-management/kyc-approvals">
                      <i className="ti ti-users" />
                      <span>KYC Approvals</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/user-management/login-history")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/user-management/login-history">
                      <i className="ti ti-users" />
                      <span>Login History</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/delete-request") ? "active" : ""
                    }
                  >
                    <Link href="/master/delete-request">
                      <i className="ti ti-flag-question" />
                      <span>Delete Request</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Admins</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/admins/admin-list") ? "active" : ""
                    }
                  >
                    <Link href="/master/admins/admin-list">
                      <i className="ti ti-users" />
                      <span>Admin List</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/admins/add-new-admin")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/admins/add-new-admin">
                      <i className="ti ti-users" />
                      <span>Add New Admin</span>
                    </Link>
                  </li>
                
                  <li
                    className={
                      checkActive("/master/admins/admin-activity-logs")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/admins/admin-activity-logs">
                      <i className="ti ti-user-shield" />
                      <span>Admin Activity Logs</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Sellers Management</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/sellers-management/sellers-list")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/sellers-management/sellers-list">
                      <i className="ti ti-users" />
                      <span>Sellers List</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/sellers-management/add-new-seller")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/sellers-management/add-new-seller">
                      <i className="ti ti-users" />
                      <span>Add New Seller</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive(
                        "/master/sellers-management/seller-approval-requests"
                      )
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/sellers-management/seller-approval-requests">
                      <i className="ti ti-users" />
                      <span>Seller Approval Requests</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/sellers-management/kyc-verification")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/sellers-management/kyc-verification">
                      <i className="ti ti-user-shield" />
                      <span>KYC Verification</span>
                    </Link>
                  </li>
                 
                </ul>
              </li>
              <li className="menu-title">
                <span>Seller Store</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/seller-store/store-info")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/seller-store/store-info">
                      <i className="ti ti-users" />
                      <span>Store List</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/seller-store/store-branding")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/seller-store/store-branding">
                      <i className="ti ti-users" />
                      <span>Add New Store </span>
                    </Link>
                  </li>
                 
                  <li
                    className={
                      checkActive(
                        "/master/seller-store/store-withdrawal-request"
                      )
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/seller-store/store-withdrawal-request">
                      <i className="ti ti-user-shield" />
                      <span>Store Withdrawal Requests</span>
                    </Link>
                  </li>
                
                  <li
                    className={
                      checkActive("/master/seller-store/store-tax-settings")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/seller-store/store-tax-settings">
                      <i className="ti ti-user-shield" />
                      <span>Store Tax Settings</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Products Module</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/product-module/all-products")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/all-products">
                      <i className="ti ti-users" />
                      <span>All Products</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/product-module/active-products")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/active-products">
                      <i className="ti ti-users" />
                      <span>Active Products</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/product-module/pending-approval")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/pending-approval">
                      <i className="ti ti-users" />
                      <span>Pending Approval</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/product-module/rejected-products")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/rejected-products">
                      <i className="ti ti-user-shield" />
                      <span>Rejected Products</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/product-module/draft-products")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/draft-products">
                      <i className="ti ti-user-shield" />
                      <span>Draft Products</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/product-module/disabled-products")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/disabled-products">
                      <i className="ti ti-user-shield" />
                      <span>Disabled Products</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive(
                        "/master/product-module/deleted-product(trash)"
                      )
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/deleted-product(trash)">
                      <i className="ti ti-user-shield" />
                      <span>Deleted Products (Trash)</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/product-module/product-reviews")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/product-module/product-reviews">
                      <i className="ti ti-user-shield" />
                      <span>Product Reviews</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Inventory</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/inventory/inventory-list")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/inventory-list">
                      <i className="ti ti-users" />
                      <span>Inventory List</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/low-stock-items")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/low-stock-items">
                      <i className="ti ti-users" />
                      <span>Low Stock Items</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/out-of-stock")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/out-of-stock">
                      <i className="ti ti-users" />
                      <span>Out of Stock</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/bulk-stock-import")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/bulk-stock-import">
                      <i className="ti ti-user-shield" />
                      <span>Bulk Stock Import</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/inventory-logs")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/inventory-logs">
                      <i className="ti ti-user-shield" />
                      <span>Inventory Logs</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/stock-transfer")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/stock-transfer">
                      <i className="ti ti-user-shield" />
                      <span>Stock Transfer</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/damaged-goods")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/damaged-goods">
                      <i className="ti ti-user-shield" />
                      <span>Damaged Goods</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/inventory/restocking-needs")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/inventory/restocking-needs">
                      <i className="ti ti-user-shield" />
                      <span>Restocking Needs</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Category Management</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/category-management/categories")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/categories">
                      <i className="ti ti-users" />
                      <span>Categories</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/category-management/sub-categories")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/sub-categories">
                      <i className="ti ti-users" />
                      <span>Sub-Categories</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/category-management/attributes")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/attributes">
                      <i className="ti ti-users" />
                      <span>Attributes</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/category-management/variants")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/variants">
                      <i className="ti ti-user-shield" />
                      <span>Variants</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/category-management/attributes-sets")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/attributes-sets">
                      <i className="ti ti-user-shield" />
                      <span>Attribute Sets</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/category-management/category-seo")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/category-seo">
                      <i className="ti ti-user-shield" />
                      <span>Category SEO</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/category-management/category-images")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/category-images">
                      <i className="ti ti-user-shield" />
                      <span>Category Images</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive(
                        "/master/category-management/category-sorting"
                      )
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/category-management/category-sorting">
                      <i className="ti ti-user-shield" />
                      <span>Category Sorting</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Orders Management</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/order-management/all-orders")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/all-orders">
                      <i className="ti ti-users" />
                      <span>All Orders</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/pending-orders")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/pending-orders">
                      <i className="ti ti-users" />
                      <span>Pending Orders</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/processing")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/processing">
                      <i className="ti ti-users" />
                      <span>Processing</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/shipped")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/shipped">
                      <i className="ti ti-user-shield" />
                      <span>Shipped</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/delivered")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/delivered">
                      <i className="ti ti-user-shield" />
                      <span>Delivered</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/cancelled")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/cancelled">
                      <i className="ti ti-user-shield" />
                      <span>Cancelled</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/returned")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/returned">
                      <i className="ti ti-user-shield" />
                      <span>Returned</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/refunded")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/refunded">
                      <i className="ti ti-user-shield" />
                      <span>Refunded</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/cod-orders")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/cod-orders">
                      <i className="ti ti-user-shield" />
                      <span>COD Orders</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/order-management/failed-orders")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-management/failed-orders">
                      <i className="ti ti-user-shield" />
                      <span>Failed Orders</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Order Tools</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/order-tools/invoice-generator")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/order-tools/invoice-generator">
                      <i className="ti ti-users" />
                      <span>Invoice Generator</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Payments</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/payments/all-transaction")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/payments/all-transaction">
                      <i className="ti ti-users" />
                      <span>All Transactions</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payments/payment-gateway-setting")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/payments/payment-gateway-setting">
                      <i className="ti ti-users" />
                      <span>Payment Gateway Settings</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payments/failed-payments")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/payments/failed-payments">
                      <i className="ti ti-users" />
                      <span>Failed Payments</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payments/refund-approvals")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/payments/refund-approvals">
                      <i className="ti ti-users" />
                      <span>Refund Approvals</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Payouts</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/manage-users") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/seller-payouts">
                      <i className="ti ti-users" />
                      <span>Seller Payouts</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/salesperson-payouts") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/salesperson-payouts">
                      <i className="ti ti-users" />
                      <span>Salesperson Payouts</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/payout-batches") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/payout-batches">
                      <i className="ti ti-users" />
                      <span>Payout Batches</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/payout-rules") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/payout-rules">
                      <i className="ti ti-users" />
                      <span>Payout Rules</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/pending-payouts") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/pending-payouts">
                      <i className="ti ti-users" />
                      <span>Pending Payouts</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/completed-payouts") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/completed-payouts">
                      <i className="ti ti-users" />
                      <span>Completed Payouts</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/rejected-payouts") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/rejected-payouts">
                      <i className="ti ti-users" />
                      <span>Rejected Payouts</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/payout-export") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/payout-export">
                      <i className="ti ti-users" />
                      <span>Payout Export</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/payouts/bank-verification") ? "active" : ""
                    }
                  >
                    <Link href="/master/payouts/bank-verification">
                      <i className="ti ti-users" />
                      <span>Bank Verification</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Commission</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/commission/commisions-rules")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/commission/commisions-rules">
                      <i className="ti ti-users" />
                      <span>Commission Rules</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/commission/product-level-commission")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/commission/product-level-commission">
                      <i className="ti ti-users" />
                      <span>Product-level Commission</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/commission/pending-commission")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/commission/pending-commission">
                      <i className="ti ti-users" />
                      <span>Pending Commission</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/commission/approved-commission")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/commission/approved-commission">
                      <i className="ti ti-users" />
                      <span>Approved Commission</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/commission/paid-commission")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/commission/paid-commission">
                      <i className="ti ti-users" />
                      <span>Paid Commission</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Marketing & Promotions</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/marketing-promotions/coupons")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/marketing-promotions/coupons">
                      <i className="ti ti-users" />
                      <span>Coupons</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Membership</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/membership/membership-plans")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/membership/membership-plans">
                      <i className="ti ti-brand-apple-podcast" />
                      <span>Membership Plans</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/membership/membership-addons")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/membership/membership-addons">
                      <i className="ti ti-brand-apple-podcast" />
                      <span>Membership Addons</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/membership/membership-transactions")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/master/membership/membership-transactions">
                      <i className="ti ti-brand-apple-podcast" />
                      <span>Transactions</span>
                    </Link>
                  </li>
                </ul>
                {/* <ul>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="ti ti-brand-apple-podcast" />
                  <span>Membership</span>
                  <span className="menu-arrow" />
                </a>
                <ul>
                  <li>
                    <Link href="/master/membership/membership-plans">Membership Plans</Link>
                  </li>
                  <li>
                    <Link href="/master/membership/membership-addons">Membership Addons</Link>
                  </li>
                  <li>
                    <Link href="/master/membership/membership-transactions">Transactions</Link>
                  </li>
                </ul>
              </li>
            </ul> */}
              </li>
              <li className="menu-title">
                <span>Support</span>
              </li>
              <li>
                <ul>
                  <li
                    className={
                      checkActive("/master/contact-messages") ? "active" : ""
                    }
                  >
                    <Link href="/master/contact-messages">
                      <i className="ti ti-message-check" />
                      <span>Contact Messages</span>
                    </Link>
                  </li>
                  <li
                    className={
                      checkActive("/master/contact-messages") ? "active" : ""
                    }
                  >
                    <Link href="/master/contact-messages">
                      <i className="ti ti-message-check" />
                      <span>All Messages</span>
                    </Link>
                  </li>
                  {/* <li>
                <a href="ticket">
                  <i className="ti ti-ticket" />
                  <span>Tickets</span>
                </a>
              </li> */}
                </ul>
              </li>
              <li className="menu-title">
                <span>Settings</span>
              </li>
              <li>
                <ul>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i className="ti ti-settings-cog" />
                      <span>General Settings</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li
                        className={
                          checkActive("/master/profile-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/profile-settings">Profile</Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/security-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/security-settings">Security</Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/notifications-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/notifications-settings">
                          Notifications
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i className="ti ti-world-cog" />
                      <span>master Settings</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li
                        className={
                          checkActive("/master/company-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/company-settings">
                          Company Settings
                        </Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/localization-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/localization-settings">
                          Localization
                        </Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/prefixes-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/prefixes-settings">Prefixes</Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/preference-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/preference-settings">
                          Preference
                        </Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/appearance-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/appearance-settings">
                          Appearance
                        </Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/language-settings")
                            ? "active"
                            : ""
                        }
                      >
                        <Link href="/master/language-settings">Language</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i className="ti ti-device-laptop" />
                      <span>System Settings</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li
                        className={
                          checkActive("/master/email-settings") ? "active" : ""
                        }
                      >
                        <Link href="/master/email-settings">
                          Email Settings
                        </Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/sms-gateways") ? "active" : ""
                        }
                      >
                        <Link href="/master/sms-gateways">SMS Gateways</Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/gdpr-cookies") ? "active" : ""
                        }
                      >
                        <Link href="/master/gdpr-cookies">GDPR Cookies</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      <i className="ti ti-moneybag" />
                      <span>Financial Settings</span>
                      <span className="menu-arrow" />
                    </a>
                    <ul>
                      <li
                        className={
                          checkActive("/master/payment-gateway") ? "active" : ""
                        }
                      >
                        <Link href="/master/payment-gateway">
                          Payment Gateways
                        </Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/bank-account") ? "active" : ""
                        }
                      >
                        <Link href="/master/bank-account">Bank Accounts</Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/tax-rate") ? "active" : ""
                        }
                      >
                        <Link href="/master/tax-rate">Tax Rates</Link>
                      </li>
                      <li
                        className={
                          checkActive("/master/currencie") ? "active" : ""
                        }
                      >
                        <Link href="/master/currencie">Currencies</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
