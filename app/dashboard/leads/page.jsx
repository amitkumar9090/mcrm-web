import React from 'react'

export default function Leads() {
  return (
   <>
   <div className="content">
  {/* Page Header */}
  <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
    <div>
      <h4 className="mb-1">
        Leads<span className="badge badge-soft-primary ms-2">123</span>
      </h4>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Leads
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
                    Lead Name
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
                    Company Name
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="collapseThree"
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
                    <ul>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          NovaWave LLC
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          BlueSky Industries
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Silver Hawk
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Summit Peak
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
                    data-bs-target="#status"
                    aria-expanded="false"
                    aria-controls="status"
                  >
                    Lead Status
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="status"
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
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Closed
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Not Closed
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Contacted
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Lost
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
                    data-bs-target="#date2"
                    aria-expanded="false"
                    aria-controls="date2"
                  >
                    Created Date
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="date2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="filter-content-list bg-light rounded border p-2 shadow mt-2">
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
              </div>
              <div className="filter-set-content">
                <div className="filter-set-content-head">
                  <a
                    href="#"
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#owner"
                    aria-expanded="false"
                    aria-controls="owner"
                  >
                    Lead Owner
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="owner"
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
                              src="/assets/img/users/user-17.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Robert Johnson
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
                              src="/assets/img/users/user-16.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Isabella Cooper
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
                              src="/assets/img/users/user-14.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          John Smith
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
                              src="/assets/img/users/user-22.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Sophia Parker
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
                              src="/assets/img/users/user-25.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Emma Reynolds
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
                              src="/assets/img/users/user-24.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Liam Carter
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
                              src="/assets/img/users/user-39.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Noah Mitchell
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
                              src="/assets/img/users/user-31.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Mason Hayes
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
                              src="/assets/img/users/user-21.jpg"
                              className="flex-shrink-0 rounded-circle"
                              alt="img"
                            />
                          </span>
                          Ron Thompson
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
                          Laura Bennett
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
              <a href="javascript:void(0);" className="btn btn-primary w-100">
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
        <input type="text" className="form-control" placeholder="Search" />
      </div>
    </div>
    <div className="d-flex align-items-center gap-2 flex-wrap">
      <div className="d-flex align-items-center shadow p-1 rounded border view-icons bg-white">
        <a href="leads-list.html" className="btn btn-sm p-1 border-0 fs-14">
          <i className="ti ti-list-tree" />
        </a>
        <a
          href="leads.html"
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
        Add Lead
      </a>
    </div>
  </div>
  {/* table header */}
  {/* Leads Kanban */}
  <div className="d-flex overflow-x-auto align-items-start gap-3">
    <div className="kanban-list-items p-2 rounded border">
      <div className="card mb-0 border-0 shadow">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-10 text-warning me-1" />
                Contacted
              </h6>
              <span className="fw-medium">45 Leads - $15,44,540</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="javascript:void(0);" className="text-info">
                <i className="ti ti-plus" />
              </a>
              <div className="dropdown table-action ms-2">
                <a
                  href="#"
                  className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
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
                    <i className="fa-solid fa-pencil text-blue" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_lead"
                  >
                    <i className="fa-regular fa-trash-can text-danger" />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kanban-drag-wrap">
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-secondary" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">SM</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Schumm</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $03,50,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  darleeo@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 12445-47878
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Newyork, United States
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-09.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-secondary" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">CS</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Collins</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $02,10,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  robertson@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 13987-90231
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Austin, United States
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-01.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-secondary" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-warning flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-warning">KI</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Konopelski</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $02,18,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  sharon@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 17932-04278
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Atlanta, United States
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-02.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="kanban-list-items p-2 rounded border">
      <div className="card mb-0 border-0 shadow">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-10 text-info me-1" />
                Not Contacted
              </h6>
              <span className="fw-medium">45 Leads - $15,44,540</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="javascript:void(0);" className="text-info">
                <i className="ti ti-plus" />
              </a>
              <div className="dropdown table-action ms-2">
                <a
                  href="#"
                  className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
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
                    <i className="fa-solid fa-pencil text-blue" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_lead"
                  >
                    <i className="fa-regular fa-trash-can text-danger" />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kanban-drag-wrap">
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-info" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">AS</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Adams</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $02,45,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  vaughan12@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 17392-27846
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  London, United Kingdom
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-03.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-info" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">WK</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Wizosk</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $01,17,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  caroltho3@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 78982-09163
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Bristol, United Kingdom
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-04.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-info" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-success flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-success">HR</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Heller</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $02,12,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  dawnmercha@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 27691-89246
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  San Francisco, United States
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-05.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="kanban-list-items p-2 rounded border">
      <div className="card mb-0 border-0 shadow">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-10 text-success me-1" />
                Closed
              </h6>
              <span className="fw-medium">45 Leads - $15,44,540</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="javascript:void(0);" className="text-info">
                <i className="ti ti-plus" />
              </a>
              <div className="dropdown table-action ms-2">
                <a
                  href="#"
                  className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
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
                    <i className="fa-solid fa-pencil text-blue" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_lead"
                  >
                    <i className="fa-regular fa-trash-can text-danger" />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kanban-drag-wrap">
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-success" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">GI</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Gutkowsi</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $01,84,043
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  rachel@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 17839-93617
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Dallas, United States
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-06.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-success" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-warning flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-warning">WR</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Walter</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $09,35,189
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  jonelle@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 16739-47193
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Leicester, United Kingdom
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-07.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-success" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-success flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-success">HN</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Hansen</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $04,27,940
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  jonathan@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 18390-37153
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Norwich, United Kingdom
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-08.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="kanban-list-items p-2 rounded border">
      <div className="card mb-0 border-0 shadow">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-10 text-danger me-1" />
                Lost
              </h6>
              <span className="fw-medium">15 Leads - $14,89,543</span>
            </div>
            <div className="d-flex align-items-center">
              <a href="javascript:void(0);" className="text-info">
                <i className="ti ti-plus" />
              </a>
              <div className="dropdown table-action ms-2">
                <a
                  href="#"
                  className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
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
                    <i className="fa-solid fa-pencil text-blue" /> Edit
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_lead"
                  >
                    <i className="fa-regular fa-trash-can text-danger" />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kanban-drag-wrap">
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-danger" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">SE</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Steve</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $04,17,593
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  sidney@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 11739-38135
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Manchester, United Kingdom
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-09.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-danger" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-info flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">LE</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Leuschke</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $08,81,389
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  brook@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 19302-91043
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Chicago, United States
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-10.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card kanban-card border mb-0 mt-3 shadow ui-sortable-handle">
            <div className="card-body">
              <div className="d-block">
                <div className="card-topbar mb-3 pt-1 bg-danger" />
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="leads-details.html"
                    className="avatar rounded-circle bg-soft-danger flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">AY</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="leads-details.html">Anthony</a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $09,27,193
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  mickey@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 17280-92016
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Derby, United Kingdom
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3">
                <span className="avatar avatar-xs border rounded-circle d-flex align-items-center justify-content-center p-1">
                  <img src="/assets/img/icons/company-icon-01.svg" alt="Img" />
                </span>
                <div className="icons-social d-flex align-items-center gap-1">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-phone-check" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center me-1"
                  >
                    <i className="ti ti-message-circle-2" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-color-swatch" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Leads Kanban */}
</div>

  {/* Add lead*/}
  <div
    className="offcanvas offcanvas-end offcanvas-large"
    tabIndex={-1}
    id="offcanvas_add"
  >
    <div className="offcanvas-header border-bottom">
      <h5 className="mb-0">Add New Lead</h5>
      <button
        type="button"
        className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">
      <form action="leads-list.html">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">
                Lead Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Lead Type</label>
              <div className="d-flex flex-wrap gap-2">
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio1">
                    Person
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio2">
                    Organization
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Company Name</label>
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
              <select className="select2" data-toggle="select2">
                <option>Select</option>
                <option>NovaWave LLC</option>
                <option>BlueSky Industries</option>
                <option>Silver Hawk</option>
                <option>Summit Peak</option>
                <option>RiverStone Ventur</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Value <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Currency <span className="text-danger">*</span>
              </label>
              <select className="select">
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
                Phone <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label mb-3" />
              <select className="select">
                <option>Select</option>
                <option>Work</option>
                <option>Home</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Source <span className="text-danger">*</span>
              </label>
              <select className="select2" data-toggle="select2">
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
              <select className="select">
                <option>Select</option>
                <option>Retail Industry</option>
                <option>Banking</option>
                <option>Hotels</option>
                <option>Financial Services</option>
                <option>Insurance</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Owner</label>
              <select
                className="multiple-img"
                multiple="multiple"
                data-toggle=" multiple"
              >
                <option data-image="/assets/img/profiles/avatar-19.jpg">
                  Darlee Robertson
                </option>
                <option data-image="/assets/img/users/user-01.jpg" selected="">
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
              <label className="form-label">Tags </label>
              <input
                className="input-tags form-control border-0 h-100"
                data-choices=""
                data-choices-limit="infinite"
                data-choices-removeitem=""
                type="text"
                defaultValue="Collab"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Description"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Visibility</label>
              <div className="d-flex flex-wrap gap-2">
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio3"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio3">
                    Public
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio4"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio4">
                    Private
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio5"
                    name="customRadio"
                    className="form-check-input"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="customRadio5">
                    Select Pepole
                  </label>
                </div>
              </div>
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
            data-bs-target="#create_success"
          >
            Create New
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* /Add lead */}
  {/* Add offcanvas */}
  <div
    className="offcanvas offcanvas-end offcanvas-large"
    tabIndex={-1}
    id="offcanvas_add_2"
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
      <form action="leads-list.html">
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
                      <select className="select2" data-toggle="select2">
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
                      <label className="form-label">Deals</label>
                      <select className="select2" data-toggle="select2">
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
                      <select className="select2" data-toggle="select2">
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
                      <select className="select">
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
                      <select className="select">
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
                      <select className="select">
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
                      <select className="select">
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
                      <label className="form-label">State / Province </label>
                      <select className="select">
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
                      <select className="select">
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
                            id="customRadio6"
                            name="customRadio"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customRadio6"
                          >
                            Public
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="customRadio7"
                            name="customRadio"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customRadio7"
                          >
                            Private
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="customRadio8"
                            name="customRadio"
                            className="form-check-input"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customRadio8"
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
  {/* /Add offcanvas */}
  {/* edit offcanvas */}
  <div
    className="offcanvas offcanvas-end offcanvas-large"
    tabIndex={-1}
    id="offcanvas_edit"
  >
    <div className="offcanvas-header border-bottom">
      <h5 className="mb-0">Edit Lead</h5>
      <button
        type="button"
        className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">
      <form action="leads-list.html">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">
                Lead Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Elizabeth Morgan"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Lead Type</label>
              <div className="d-flex flex-wrap gap-2">
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio9"
                    name="customRadio"
                    className="form-check-input"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="customRadio9">
                    Person
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio10"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio10">
                    Organization
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Company Name</label>
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
              <select className="select2" data-toggle="select2">
                <option>Select</option>
                <option selected="">NovaWave LLC</option>
                <option>BlueSky Industries</option>
                <option>Silver Hawk</option>
                <option>Summit Peak</option>
                <option>RiverStone Ventur</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Value <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" defaultValue={10} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Currency <span className="text-danger">*</span>
              </label>
              <select className="select">
                <option>Select</option>
                <option selected="">Dollar</option>
                <option>Euro</option>
                <option>Pound</option>
                <option>Rupee</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="+1 87545 54503"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label mb-3" />
              <select className="select">
                <option>Select</option>
                <option selected="">Work</option>
                <option>Home</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Source <span className="text-danger">*</span>
              </label>
              <select className="select2" data-toggle="select2">
                <option>Select</option>
                <option selected="">Phone Calls</option>
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
              <select className="select">
                <option>Select</option>
                <option>Retail Industry</option>
                <option selected="">Banking</option>
                <option>Hotels</option>
                <option>Financial Services</option>
                <option>Insurance</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Owner</label>
              <select
                className="multiple-img"
                multiple="multiple"
                data-toggle=" multiple"
              >
                <option data-image="/assets/img/profiles/avatar-19.jpg">
                  Darlee Robertson
                </option>
                <option data-image="/assets/img/users/user-01.jpg" selected="">
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
              <label className="form-label">Tags </label>
              <input
                className="input-tags form-control border-0 h-100"
                data-choices=""
                data-choices-limit="infinite"
                data-choices-removeitem=""
                type="text"
                defaultValue="Collab"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Description"
                defaultValue={
                  "Key decision-maker overseeing operations and strategic planning. Responsible for approving major deals and partnerships. Prefers direct communication via email."
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Visibility</label>
              <div className="d-flex flex-wrap gap-2">
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio11"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio11">
                    Public
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio12"
                    name="customRadio"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="customRadio12">
                    Private
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="customRadio13"
                    name="customRadio"
                    className="form-check-input"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="customRadio13">
                    Select Pepole
                  </label>
                </div>
              </div>
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
            data-bs-target="#create_success"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* edit offcanvas */}
  {/* success modal */}
  <div className="modal fade" id="create_success">
    <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
      <div className="modal-content rounded-0">
        <div className="modal-body p-4 text-center position-relative">
          <div className="mb-3 position-relative z-1">
            <span className="avatar avatar-xl badge-soft-info border-0 text-info rounded-circle">
              <i className="ti ti-building-skyscraper fs-24" />
            </span>
          </div>
          <h5 className="mb-1">Lead Created Successfully!!!</h5>
          <p className="mb-3">View the details of lead, created</p>
          <div className="d-flex justify-content-center">
            <a
              href="#"
              className="btn btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <a
              href="leads-details.html"
              className="btn btn-primary position-relative z-1 w-100"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* success modal */}
  {/* delete modal */}
  <div className="modal fade" id="delete_lead">
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
            Are you sure you want to remove leads you selected.
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
  {/* delete modal */}
</>

  )
}
