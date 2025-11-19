'use client';
import React from "react";

export default function Companies() {
  return (
  
    <>
      <div>
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <div>
              <h4 className="mb-1">
                Companies
                <span className="badge badge-soft-primary ms-2">125</span>
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Companies
                  </li>
                </ol>
              </nav>
            </div>
            <div className="gap-2 d-flex align-items-center flex-wrap">
              <div className="dropdown">
                <a
                  href="javascript:void(0);"
                  className="dropdown-toggle btn btn-outline-light px-2 shadow"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-package-export me-2" />
                  Export
                </a>
                <div className="dropdown-menu  dropdown-menu-end">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="ti ti-file-type-pdf me-1" />
                        Export as PDF
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="ti ti-file-type-xls me-1" />
                        Export as Excel{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                className="btn btn-icon btn-outline-light shadow"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Refresh"
                data-bs-original-title="Refresh"
              >
                <i className="ti ti-refresh" />
              </a>
              <a
                href="javascript:void(0);"
                className="btn btn-icon btn-outline-light shadow"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Collapse"
                data-bs-original-title="Collapse"
                id="collapse-header"
              >
                <i className="ti ti-transition-top" />
              </a>
            </div>
          </div>
          {/* End Page Header */}
          {/* table header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="dropdown">
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-light shadow px-2"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter me-2" />
                  Filter
                  <i className="ti ti-chevron-down ms-2" />
                </a>
                <div className="filter-dropdown-menu dropdown-menu dropdown-menu-lg p-0">
                  <div className="filter-header d-flex align-items-center justify-content-between border-bottom">
                    <h6 className="mb-0">
                      <i className="ti ti-filter me-1" />
                      Filter
                    </h6>
                    <button
                      type="button"
                      className="btn-close close-filter-btn"
                      data-bs-dismiss="dropdown-menu"
                      aria-label="Close"
                    />
                  </div>
                  <div className="filter-set-view p-3">
                    <div className="accordion" id="accordionExample">
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Owner
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse show"
                          id="collapseTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                            <div className="mb-2">
                              <div className="input-icon-start input-icon position-relative">
                                <span className="input-icon-addon fs-12">
                                  <i className="ti ti-search" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul className="mb-0">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-06.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Elizabeth Morgan
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-40.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Katherine Brooks
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-05.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Sophia Lopez
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-10.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  John Michael
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-15.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Natalie Brooks
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-01.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  William Turner
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-13.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Ava Martinez
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-12.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Nathan Reed
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-03.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Lily Anderson
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <img
                                      src="/assets/img/users/user-18.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Ryan Coleman
                                </label>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="link-primary text-decoration-underline p-2 d-flex"
                                >
                                  Load More
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Tags
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse"
                          id="collapseThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                            <ul>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Collab
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Promotion
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  VIP
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Location
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse"
                          id="collapseFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                            <div className="mb-1">
                              <div className="input-icon-start input-icon position-relative">
                                <span className="input-icon-addon fs-12">
                                  <i className="ti ti-search" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul className="mb-0">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xss rounded-circle me-1">
                                    <img
                                      src="/assets/img/flags/us.svg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  USA
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xss rounded-circle me-1">
                                    <img
                                      src="/assets/img/flags/ae.svg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  UAE
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xss rounded-circle me-1">
                                    <img
                                      src="/assets/img/flags/de.svg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Germany
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xss rounded-circle me-1">
                                    <img
                                      src="/assets/img/flags/fr.svg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  France
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Rating
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse"
                          id="collapseOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                            <ul>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="rating">
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <span className="ms-1">5.0</span>
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="rating">
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled" />
                                    <span className="ms-1">4.0</span>
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="rating">
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled" />
                                    <i className="ti ti-star-filled" />
                                    <span className="ms-1">3.0</span>
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="rating">
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled" />
                                    <i className="ti ti-star-filled" />
                                    <i className="ti ti-star-filled" />
                                    <span className="ms-1">2.0</span>
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span className="rating">
                                    <i className="ti ti-star-filled text-warning" />
                                    <i className="ti ti-star-filled" />
                                    <i className="ti ti-star-filled" />
                                    <i className="ti ti-star-filled" />
                                    <i className="ti ti-star-filled" />
                                    <span className="ms-1">1.0</span>
                                  </span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            className="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#Status"
                            aria-expanded="false"
                            aria-controls="Status"
                          >
                            Status
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse"
                          id="Status"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
                            <ul>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Active
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center">
                                  <input
                                    className="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Inactive
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-light w-100"
                      >
                        Reset
                      </a>
                      <a
                        href="companies-list.html"
                        className="btn btn-primary w-100"
                      >
                        Filter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-icon input-icon-start position-relative">
                <span className="input-icon-addon text-dark">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="d-flex align-items-center shadow p-1 rounded border view-icons bg-white">
                <a
                  href="companies-list.html"
                  className="btn btn-sm p-1 border-0 fs-14"
                >
                  <i className="ti ti-list-tree" />
                </a>
                <a
                  href="companies.html"
                  className="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14 active"
                >
                  <i className="ti ti-grid-dots" />
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="btn btn-primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas_add"
              >
                <i className="ti ti-square-rounded-plus-filled me-1" />
                Add Company
              </a>
            </div>
          </div>
          {/* table header */}
          {/* Company Grid */}
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-01.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Thailand Pool Tables
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.2
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        robertson@example.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 875455453
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Germany
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-01.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-02.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            IN2IT
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          5.0
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        sharon@example.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 989757485
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        USA
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-02.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-03.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Toy Smart Shop
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        jessica13@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 89316-83167
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-03.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-04.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Quiescent
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        jessica13@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 89316-83167
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-04.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-05.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            CoastalStar Co.
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.7
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item "
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        carolTho3@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 84295-01629
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        China
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-06.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-06.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Hontinga
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          5.0
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item "
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        dawnmercha@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 79253-01692
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Martin Lewis
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-07.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-01.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Thailand Pool Tables
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.2
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        robertson@example.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 875455453
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Germany
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-01.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-02.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            IN2IT
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          5.0
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        sharon@example.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 989757485
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        USA
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-02.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-03.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Toy Smart Shop
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        jessica13@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 89316-83167
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-03.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-04.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Quiescent
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        jessica13@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 89316-83167
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-04.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-05.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            CoastalStar Co.
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          4.7
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item "
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        carolTho3@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 84295-01629
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        China
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-06.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6">
              <div className="card border shadow">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3 border-bottom pb-3">
                    <div className="d-flex align-items-center">
                      <a
                        href="company-details.html"
                        className="avatar border rounded-circle flex-shrink-0 me-2"
                      >
                        <img
                          src="/assets/img/icons/company-icon-06.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </a>
                      <div>
                        <h6 className="fs-14">
                          <a href="company-details.html" className="fw-medium">
                            Hontinga
                          </a>
                        </h6>
                        <div className="set-star text-default">
                          <i className="ti ti-star-filled me-1 text-warning" />
                          5.0
                        </div>
                      </div>
                    </div>
                    <div className="dropdown table-action">
                      <a
                        href="#"
                        className="action-icon btn btn-icon btn-sm btn-outline-light shadow"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a
                          className="dropdown-item "
                          href="#"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas_edit"
                        >
                          <i className="ti ti-edit text-blue" /> Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_contact"
                        >
                          <i className="ti ti-trash" /> Delete
                        </a>
                        <a
                          className="dropdown-item"
                          href="company-details.html"
                        >
                          <i className="ti ti-eye text-blue-light" /> Preview
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-block">
                    <div className="d-flex flex-column mb-0">
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        dawnmercha@gmail.com
                      </p>
                      <p className="text-default d-inline-flex align-items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 79253-01692
                      </p>
                      <p className="text-default d-inline-flex align-items-center">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Martin Lewis
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 border-top pt-3 mt-3">
                    <div className="d-flex align-items-center grid-social-links">
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-mail fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-phone-check fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle me-1"
                      >
                        <i className="ti ti-message-circle-share fs-14" />
                      </a>
                      <a
                        href="#"
                        className="avatar avatar-xs text-dark rounded-circle"
                      >
                        <i className="ti ti-brand-facebook fs-14" />
                      </a>
                    </div>
                    <div>
                      <span className="avatar avatar-xs border-0">
                        <img
                          src="/assets/img/profiles/avatar-07.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Company Grid */}
          <div className="load-btn text-center">
            <a href="javascript:void(0);" className="btn btn-primary">
              <i className="ti ti-loader me-1" /> Load More
            </a>
          </div>
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <footer className="footer d-block d-md-flex justify-content-between text-md-start text-center">
          <p className="mb-md-0 mb-1">Copyright © - M CRM</p>
        </footer>
        {/* End Footer */}
      </div>

      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_add"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Add New Company</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="companies-list.html">
            <div className="accordion accordion-bordered" id="main_accordion">
              {/* Basic Info */}
              <div className="accordion-item rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#basic"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-user-plus" />
                    </span>
                    Basic Info
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id="basic"
                  data-bs-parent="#main_accordion"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center mb-3">
                          <div className="avatar avatar-xxl border border-dashed me-3 flex-shrink-0">
                            <div className="position-relative d-flex align-items-center">
                              <i className="ti ti-photo text-dark fs-16" />
                            </div>
                          </div>
                          <div className="d-inline-flex flex-column align-items-start">
                            <div className="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                              <i className="ti ti-file-broken me-1" />
                              Upload file
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple=""
                              />
                            </div>
                            <span>JPG, GIF or PNG. Max size of 800K</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Company Name<span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <label className="form-label">
                              Email <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="form-check form-switch mb-1">
                              <label className="form-check-label d-flex align-items-center gap-2">
                                <span>Email Opt Out</span>
                                <input
                                  className="form-check-input form-check-input-sm switchCheckDefault ms-auto"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked=""
                                />
                              </label>
                            </div>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone 1</label>
                          <input
                            type="text"
                            className="form-control phone"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone 2</label>
                          <input
                            type="text"
                            className="form-control phone"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Fax</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Website</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 position-relative">
                          <label className="form-label">Reviews </label>
                          <div className="input-group w-auto input-group-flat">
                            <input type="text" className="form-control" />
                            <span className="input-group-text">
                              <i className="ti ti-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Owner</label>
                          <select   className="select2" data-toggle="select2">
                            <option>Select</option>
                            <option>Hendry Milner</option>
                            <option>Guilory Berggren</option>
                            <option>Jami Carlile</option>
                            <option>Theresa Nelson</option>
                            <option>Smith Cooper</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Tags </label>
                          <input
                            className="input-tags form-control border-0 h-100"
                            data-choices=""
                            data-choices-limit="infinite"
                            data-choices-removeitem=""
                            type="text"
                            defaultValue="Collab, VIP"
                          />
                          <span className="fs-13">
                            Enter value separated by comma
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-label">Deals</label>
                            <a
                              href="#"
                              className="label-add link-primary mb-1"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvas_add_2"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New
                            </a>
                          </div>
                          <select   className="select2" data-toggle="select2">
                            <option>Select</option>
                            <option>Collins</option>
                            <option>Konopelski</option>
                            <option>Adams</option>
                            <option>Schumm</option>
                            <option>Wisozk</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Source <span className="text-danger">*</span>
                          </label>
                          <select   className="select2" data-toggle="select2">
                            <option>Select</option>
                            <option>Phone Calls</option>
                            <option>Social Media</option>
                            <option>Referral Sites</option>
                            <option>Web Analytics</option>
                            <option>Previous Purchases</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Industry <span className="text-danger">*</span>
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>Retail Industry</option>
                            <option>Banking</option>
                            <option>Hotels</option>
                            <option>Financial Services</option>
                            <option>Insurance</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Contacts <span className="text-danger">*</span>
                          </label>
                          <select  
                            className="multiple-img"
                            multiple="multiple"
                            data-toggle=" multiple"
                          >
                            <option
                              data-image="/assets/img/profiles/avatar-19.jpg"
                              selected=""
                            >
                              Darlee Robertson
                            </option>
                            <option data-image="/assets/img/users/user-01.jpg">
                              Sharon Roy
                            </option>
                            <option data-image="/assets/img/profiles/avatar-21.jpg">
                              Vaughan Lewis
                            </option>
                            <option data-image="/assets/img/profiles/avatar-23.jpg">
                              Jessica Louise
                            </option>
                            <option data-image="/assets/img/profiles/avatar-16.jpg">
                              Carol Thomas
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Currency <span className="text-danger">*</span>
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>Dollar</option>
                            <option>Euro</option>
                            <option>Pound</option>
                            <option>Rupee</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Language <span className="text-danger">*</span>
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>English</option>
                            <option>Arabic</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-0">
                          <label className="form-label">
                            Description <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Basic Info */}
              {/* Address Info */}
              <div className="accordion-item border-top rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#address"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-map-pin-cog" />
                    </span>
                    Address Info
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="address"
                  data-bs-parent="#main_accordion"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Street Address </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Country</label>
                          <select   className="select">
                            <option>Select</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>France</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            State / Province{" "}
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>California</option>
                            <option>New York</option>
                            <option>Texas</option>
                            <option>Florida</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 mb-md-0">
                          <label className="form-label">City </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>Los Angeles</option>
                            <option>San Diego</option>
                            <option>Fresno</option>
                            <option>San Francisco</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-0">
                          <label className="form-label">Zipcode </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Address Info */}
              {/* Social Profile */}
              <div className="accordion-item border-top rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#social"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-social" />
                    </span>
                    Social Profile
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="social"
                  data-bs-parent="#main_accordion"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Facebook</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Skype </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Linkedin </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Twitter</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 mb-md-0">
                          <label className="form-label">Whatsapp</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-0">
                          <label className="form-label">Instagram</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Social Profile */}
              {/* Access */}
              <div className="accordion-item border-top rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#access-info"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-accessible" />
                    </span>
                    Access
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="access-info"
                  data-bs-parent="#main_accordion"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-0">
                          <label className="form-label">Visibility</label>
                          <div className="d-flex flex-wrap gap-2">
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadio1"
                              >
                                Public
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio2"
                                name="customRadio"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadio2"
                              >
                                Private
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio3"
                                name="customRadio"
                                className="form-check-input"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadio3"
                              >
                                Select Pepole
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Access */}
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#create_success"
              >
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_edit"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Edit Company</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="companies-list.html">
            <div className="accordion accordion-bordered" id="main_accordion2">
              {/* Basic Info */}
              <div className="accordion-item rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#basic2"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-user-plus" />
                    </span>
                    Basic Info
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id="basic2"
                  data-bs-parent="#main_accordion2"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center mb-3">
                          <div className="avatar avatar-xxl border border-dashed me-3 flex-shrink-0">
                            <div className="position-relative d-flex align-items-center">
                              <i className="ti ti-photo text-dark fs-16" />
                            </div>
                          </div>
                          <div className="d-inline-flex flex-column align-items-start">
                            <div className="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                              <i className="ti ti-file-broken me-1" />
                              Upload file
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple=""
                              />
                            </div>
                            <span>JPG, GIF or PNG. Max size of 800K</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Company Name<span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <label className="form-label">
                              Email <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="form-check form-switch mb-1">
                              <label className="form-check-label d-flex align-items-center gap-2">
                                <span>Email Opt Out</span>
                                <input
                                  className="form-check-input form-check-input-sm switchCheckDefault ms-auto"
                                  type="checkbox"
                                  role="switch"
                                  defaultChecked=""
                                />
                              </label>
                            </div>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone 1</label>
                          <input
                            type="text"
                            className="form-control phone"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone 2</label>
                          <input
                            type="text"
                            className="form-control phone"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Fax</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Website</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 position-relative">
                          <label className="form-label">Reviews </label>
                          <div className="input-group w-auto input-group-flat">
                            <input type="text" className="form-control" />
                            <span className="input-group-text">
                              <i className="ti ti-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Owner</label>
                          <select   className="select2" data-toggle="select2">
                            <option>Select</option>
                            <option>Hendry Milner</option>
                            <option>Guilory Berggren</option>
                            <option>Jami Carlile</option>
                            <option>Theresa Nelson</option>
                            <option>Smith Cooper</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Tags </label>
                          <input
                            className="input-tags form-control border-0 h-100"
                            data-choices=""
                            data-choices-limit="infinite"
                            data-choices-removeitem=""
                            type="text"
                            defaultValue="Collab, VIP"
                          />
                          <span className="fs-13">
                            Enter value separated by comma
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-label">Deals</label>
                            <a
                              href="#"
                              className="label-add link-primary mb-1"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvas_add_2"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New
                            </a>
                          </div>
                          <select   className="select2" data-toggle="select2">
                            <option>Select</option>
                            <option>Collins</option>
                            <option>Konopelski</option>
                            <option>Adams</option>
                            <option>Schumm</option>
                            <option>Wisozk</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Source <span className="text-danger">*</span>
                          </label>
                          <select   className="select2" data-toggle="select2">
                            <option>Select</option>
                            <option>Phone Calls</option>
                            <option>Social Media</option>
                            <option>Referral Sites</option>
                            <option>Web Analytics</option>
                            <option>Previous Purchases</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Industry <span className="text-danger">*</span>
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>Retail Industry</option>
                            <option>Banking</option>
                            <option>Hotels</option>
                            <option>Financial Services</option>
                            <option>Insurance</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Contacts <span className="text-danger">*</span>
                          </label>
                          <select  
                            className="multiple-img"
                            multiple="multiple"
                            data-toggle=" multiple"
                          >
                            <option
                              data-image="/assets/img/profiles/avatar-19.jpg"
                              selected=""
                            >
                              Darlee Robertson
                            </option>
                            <option data-image="/assets/img/users/user-01.jpg">
                              Sharon Roy
                            </option>
                            <option data-image="/assets/img/profiles/avatar-21.jpg">
                              Vaughan Lewis
                            </option>
                            <option data-image="/assets/img/profiles/avatar-23.jpg">
                              Jessica Louise
                            </option>
                            <option data-image="/assets/img/profiles/avatar-16.jpg">
                              Carol Thomas
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Currency <span className="text-danger">*</span>
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>Dollar</option>
                            <option>Euro</option>
                            <option>Pound</option>
                            <option>Rupee</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Language <span className="text-danger">*</span>
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>English</option>
                            <option>Arabic</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-0">
                          <label className="form-label">
                            Description <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Basic Info */}
              {/* Address Info */}
              <div className="accordion-item border-top rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#address2"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-map-pin-cog" />
                    </span>
                    Address Info
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="address2"
                  data-bs-parent="#main_accordion2"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Street Address </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Country</label>
                          <select   className="select">
                            <option>Select</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>France</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            State / Province{" "}
                          </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>California</option>
                            <option>New York</option>
                            <option>Texas</option>
                            <option>Florida</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 mb-md-0">
                          <label className="form-label">City </label>
                          <select   className="select">
                            <option>Select</option>
                            <option>Los Angeles</option>
                            <option>San Diego</option>
                            <option>Fresno</option>
                            <option>San Francisco</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-0">
                          <label className="form-label">Zipcode </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Address Info */}
              {/* Social Profile */}
              <div className="accordion-item border-top rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#social2"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-social" />
                    </span>
                    Social Profile
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="social2"
                  data-bs-parent="#main_accordion2"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Facebook</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Skype </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Linkedin </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Twitter</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 mb-md-0">
                          <label className="form-label">Whatsapp</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-0">
                          <label className="form-label">Instagram</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Social Profile */}
              {/* Access */}
              <div className="accordion-item border-top rounded mb-3">
                <div className="accordion-header">
                  <a
                    href="#"
                    className="accordion-button accordion-custom-button rounded"
                    data-bs-toggle="collapse"
                    data-bs-target="#access-info2"
                  >
                    <span className="avatar avatar-md rounded me-1">
                      <i className="ti ti-accessible" />
                    </span>
                    Access
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="access-info2"
                  data-bs-parent="#main_accordion2"
                >
                  <div className="accordion-body border-top">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-0">
                          <label className="form-label">Visibility</label>
                          <div className="d-flex flex-wrap gap-2">
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio4"
                                name="customRadio"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadio4"
                              >
                                Public
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio5"
                                name="customRadio"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadio5"
                              >
                                Private
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio6"
                                name="customRadio"
                                className="form-check-input"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customRadio6"
                              >
                                Select Pepole
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Access */}
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_add_2"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Add New Deals</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="offcanvas-body">
          <form action="companies-list.html">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Deal Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">
                      Pipeine <span className="text-danger">*</span>
                    </label>
                  </div>
                  <select   className="select2" data-toggle="select2">
                    <option>Choose</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Calls</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <select   className="select2" data-toggle="select2">
                    <option>Choose</option>
                    <option>Open</option>
                    <option>Lost</option>
                    <option>Won</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Deal Value<span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Currency <span className="text-danger">*</span>
                  </label>
                  <select   className="select">
                    <option>Choose</option>
                    <option>Dollar</option>
                    <option>Euro</option>
                    <option>Pound</option>
                    <option>Rupee</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Period <span className="text-danger">*</span>
                  </label>
                  <select   className="select">
                    <option>Choose</option>
                    <option>Days</option>
                    <option>Month</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Period Value <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Contacts <span className="text-danger">*</span>
                  </label>
                  <select  
                    className="multiple-img"
                    multiple="multiple"
                    data-toggle=" multiple"
                  >
                    <option
                      data-image="/assets/img/profiles/avatar-19.jpg"
                      selected=""
                    >
                      Darlee Robertson
                    </option>
                    <option data-image="/assets/img/users/user-01.jpg">
                      Sharon Roy
                    </option>
                    <option data-image="/assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="/assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="/assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Project <span className="text-danger">*</span>
                  </label>
                  <input
                    className="input-tags form-control border-0 h-100"
                    data-choices=""
                    data-choices-limit="infinite"
                    data-choices-removeitem=""
                    type="text"
                    defaultValue="Devops Design, MargrateDesign"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Expected Closing Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Assignee <span className="text-danger">*</span>
                  </label>
                  <select   className="multiple-img" multiple="multiple">
                    <option data-image="/assets/img/profiles/avatar-19.jpg">
                      Darlee Robertson
                    </option>
                    <option
                      data-image="/assets/img/profiles/avatar-20.jpg"
                      selected=""
                    >
                      Sharon Roy
                    </option>
                    <option data-image="/assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="/assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="/assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Follow Up Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Source <span className="text-danger">*</span>
                  </label>
                  <select   className="select">
                    <option>Select</option>
                    <option>Google</option>
                    <option>Social Media</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Tags <span className="text-danger">*</span>
                  </label>
                  <input
                    className="input-tags form-control border-0 h-100"
                    data-choices=""
                    data-choices-limit="infinite"
                    data-choices-removeitem=""
                    type="text"
                    defaultValue="Collab, Rated"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Priority <span className="text-danger">*</span>
                  </label>
                  <select   className="select">
                    <option>Select</option>
                    <option>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <div className="editor pages-editor" />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#create_success_2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="modal fade" id="create_success">
        <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
          <div className="modal-content rounded-0">
            <div className="modal-body p-4 text-center position-relative">
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-success border-0 text-success rounded-circle">
                  <i className="ti ti-building-community fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Company Created Successfully!!!</h5>
              <p className="mb-3">View the details of company, created</p>
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-light position-relative z-1 me-2 w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <a
                  href="company-details.html"
                  className="btn btn-primary position-relative z-1 w-100"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="delete_contact">
        <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
          <div className="modal-content rounded-0">
            <div className="modal-body p-4 text-center position-relative">
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Delete Confirmation</h5>
              <p className="mb-3">
                Are you sure you want to remove company you selected.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-light position-relative z-1 me-2 w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <a
                  href="#"
                  className="btn btn-primary position-relative z-1 w-100"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
