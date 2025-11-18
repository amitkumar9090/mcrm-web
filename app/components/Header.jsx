'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // <-- import useRouter
import Link from 'next/link';
import { logout } from "../services/api";
import { isAuthenticated } from "../utils/auth";

export default function Header() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    // Check authentication and get token
    if (!isAuthenticated()) {
      router.replace("/login"); // Redirect if not logged in
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, [router]);

  const handleLogout = async () => {
     localStorage.removeItem('token');

    // Optionally clear cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login
    router.push('/login');
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
 
  < header className = "navbar-header" >
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
            <div className="input-icon position-relative me-2" suppressHydrationWarning>
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
                      <h6 className="m-0 fs-16 fw-semibold"> Notifications</h6>
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
                        <p className="mb-0 fw-medium text-dark">Thomas William</p>
                        <p className="mb-1 text-wrap">
                          “Oh, I finished de-bugging the phones, but the system's
                          compiling for eighteen minutes, or twenty...”
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
                        <p className="mb-0 fw-medium text-dark">Sarah Anderson</p>
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
                        <p className="mb-0 fw-medium text-dark">Ann McClure</p>
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
              <Link href="/dashboard/profile-settings" className="dropdown-item">
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
              <Link href="/dashboard/profile-settings" className="dropdown-item">
                <i className="ti ti-settings me-1 align-middle" />
                <span className="align-middle">Settings</span>
              </Link>
              {/* Item*/}
              <div className="pt-2 mt-2 border-top">
                <button  className="dropdown-item text-danger" onClick={handleLogout}>
                  <i className="ti ti-logout me-1 fs-17 align-middle" />
                  <span className="align-middle">Sign Out</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </header >
  
 
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
              <li className="active">
                <Link href="/dashboard">
                  <i className="ti ti-user-star" />
                  <span>Dashboard</span>
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
                <Link href="/dashboard/companies">
                  <i className="ti ti-building-community" />
                  <span>List Companies</span>
                </Link>
              </li>
              <li>
                <Link  href="/dashboard/deals">
                  <i className="ti ti-medal" />
                  <span>Deals</span>
                </Link >
              </li>
              <li>
                <Link href="/dashboard/leads">
                  <i className="ti ti-chart-arcs" />
                  <span>Leads</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/projects">
                  <i className="ti ti-atom-2" />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <a href="/dashboard/invoice">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Manage Users</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Create Users</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Roles &amp; Permissions</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>KYC Approvals</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Login History</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/delete-request">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Admin List</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Add New Admin</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Admin Permissions</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Sellers List</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Add New Seller</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Seller Approval Requests</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>KYC Verification</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Seller Payout Settings</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Suspended Sellers</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Seller Activity Logs</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Seller Documents</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Seller Commission</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Seller Store</span>
          </li>
          <li>
            <ul>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Store Info</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Store Branding</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Store Badges</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Store Rating Reports</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Store-level Discounts</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Promotion Management</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Store SEO Settings</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Store Withdrawal Requests</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Store Shipping Settings</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Active Products</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Pending Approval</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Rejected Products</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Draft Products</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Disabled Products</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Deleted Products (Trash)</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Product Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Product Images Audit</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Product History</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Inventory</span>
          </li>
          <li>
            <ul>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Inventory List</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Low Stock Items</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Out of Stock</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Bulk Stock Import</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Inventory Logs</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Stock Transfer</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Damaged Goods</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Sub-Categories</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Attributes</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Variants</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Attribute Sets</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Category SEO</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Category Images</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>All Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Pending Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Processing</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Shipped</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Delivered</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Cancelled</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Returned</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>Refunded</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
                  <i className="ti ti-user-shield" />
                  <span>COD Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/roles-permissions">
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
              <li>
                <Link href="/dashboard/manage-users">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>All Transactions</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Payment Gateway Settings</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Failed Payments</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Seller Payouts</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Salesperson Payouts</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Payout Batches</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Payout Rules</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Pending Payouts</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Completed Payouts</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Rejected Payouts</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Payout Export</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
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
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Commission Rules</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Product-level Commission</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Pending Commission</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
                  <i className="ti ti-users" />
                  <span>Approved Commission</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/manage-users">
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
              <li>
                <Link href="/dashboard/manage-users">
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
                  <li>
                    <Link href="/dashboard/membership/membership-plans">
                      <i className="ti ti-brand-apple-podcast" />
                      <span>Membership Plans</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/membership/membership-addons">
                      <i className="ti ti-brand-apple-podcast" />
                      <span>Membership Addons</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/membership/membership-transactions">
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
                    <Link href="/dashboard/membership/membership-plans">Membership Plans</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/membership/membership-addons">Membership Addons</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/membership/membership-transactions">Transactions</Link>
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
              <li>
                <Link href="/dashboard/contact-messages">
                  <i className="ti ti-message-check" />
                  <span>Contact Messages</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/contact-messages">
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
                  <li>
                    <Link href="/dashboard/profile-settings">Profile</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/security-settings">Security</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/notifications-settings">Notifications</Link>
                  </li>
                  
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="ti ti-world-cog" />
                  <span>Website Settings</span>
                  <span className="menu-arrow" />
                </a>
                <ul>
                  <li>
                    <Link  href="/dashboard/company-settings">Company Settings</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/localization-settings">Localization</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/prefixes-settings">Prefixes</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/preference-settings">Preference</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/appearance-settings">Appearance</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/language-settings">Language</Link>
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
                  <li>
                    <Link href="/dashboard/email-settings">Email Settings</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/sms-gateways">SMS Gateways</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/gdpr-cookies">GDPR Cookies</Link>
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
                  <li>
                    <Link href="/dashboard/payment-gateway">Payment Gateways</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/bank-account">Bank Accounts</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/tax-rate">Tax Rates</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/currencie">Currencies</Link>
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
