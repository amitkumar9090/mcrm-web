import React from "react";

export default function Deals() {
  return (
    <>

    <div className="content">
  {/* Page Header */}
  <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
    <div>
      <h4 className="mb-1">
        Deals<span className="badge badge-soft-primary ms-2">125</span>
      </h4>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Deals
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
                    className="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Deals Name
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="collapseThree"
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
                    <ul>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Konopelski
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Adams
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Gutkowski
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Walter
                        </label>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="link-primary text-decoration-underline p-2 pt-0 d-flex"
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
                    data-bs-target="#owner"
                    aria-expanded="false"
                    aria-controls="owner"
                  >
                    Owner
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="owner"
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
                          Hendry Milner
                        </label>
                      </li>
                      <li className="mb-1">
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Guilory Berggren
                        </label>
                      </li>
                      <li className="mb-1">
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Jami Carlile
                        </label>
                      </li>
                      <li className="mb-1">
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Theresa Nelson
                        </label>
                      </li>
                      <li className="mb-1">
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Smith Cooper
                        </label>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="link-primary text-decoration-underline p-2 pt-0 d-flex"
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
                          Won
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Open
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
                    data-bs-target="#tags"
                    aria-expanded="false"
                    aria-controls="tags"
                  >
                    Tags
                  </a>
                </div>
                <div
                  className="filter-set-contents accordion-collapse collapse"
                  id="tags"
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
                          Promotion
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Rated
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center">
                          <input
                            className="form-check-input m-0 me-1"
                            type="checkbox"
                          />
                          Rejected
                        </label>
                      </li>
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
                          Calls
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
        <a href="deals-list.html" className="btn btn-sm p-1 border-0 fs-14">
          <i className="ti ti-list-tree" />
        </a>
        <a
          href="deals.html"
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
        Add Deal
      </a>
    </div>
  </div>
  {/* table header */}
  {/* Deals Kanban */}
  <div className="d-flex overflow-x-auto align-items-start mb-0 gap-3">
    <div className="kanban-list-items p-2 rounded border">
      <div className="card mb-0 border-0 shadow">
        <div className="card-body p-2">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-10 text-info me-1" />
                Qualify To Buy
              </h6>
              <span>45 Leads - $15,44,540</span>
            </div>
            <div className="d-flex align-items-center">
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
                    data-bs-target="#delete_deal"
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-success text-success rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-success">HT</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Howell, Tremblay <br /> and Rath
                    </a>
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
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-19.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Darlee Robertson
                  </a>
                </div>
                <span className="badge bg-success">85%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 10 Jan 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-warning text-warning rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-warning">RJ</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Robert, John and <br /> Carlos
                    </a>
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
                  sheron@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 12445-47878
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Exeter, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-20.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Sharon Roy
                  </a>
                </div>
                <span className="badge bg-warning">15%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 12 Jan 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">WS</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Wendy, Star and <br /> David
                    </a>
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column">
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-report-money text-dark me-1" />
                  $04,22,000
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-mail text-dark me-1" />
                  vau@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 12445-47878
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Phoenix, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-21.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Vaughan Lewis
                  </a>
                </div>
                <span className="badge bg-info">95%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 14 Jan 2024
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
                Contact Made
              </h6>
              <span>30 Leads - $19,94,938</span>
            </div>
            <div className="d-flex align-items-center">
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
                    data-bs-target="#delete_deal"
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">BR</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Byron, Roman and <br /> Bailey
                    </a>
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
                  jessica13@example.com
                </p>
                <p className="text-default d-inline-flex align-items-center mb-2">
                  <i className="ti ti-phone text-dark me-1" />
                  +1 89351-90346
                </p>
                <p className="text-default d-inline-flex align-items-center">
                  <i className="ti ti-map-pin-pin text-dark me-1" />
                  Chester, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-01.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Jessica Louise
                  </a>
                </div>
                <span className="badge bg-danger">47%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 06 Feb 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-success text-success rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-success">RJ</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Robert, John and <br /> Carlos
                    </a>
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
                  Charlotte, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-16.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Carol Thomas
                  </a>
                </div>
                <span className="badge bg-success">98%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 15 Jan 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">IC</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Irene, Charles and <br /> Wilston
                    </a>
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
                  Bristol, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-22.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Dawn Mercha
                  </a>
                </div>
                <span className="badge bg-danger">95%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 25 Jan 2024
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
                Presentation
              </h6>
              <span>25 Leads - $10,36.390</span>
            </div>
            <div className="d-flex align-items-center">
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
                    data-bs-target="#delete_deal"
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">HT</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Jody, Powell and <br /> Cecil
                    </a>
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
                  Baltimore, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-23.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Rachel Hampton
                  </a>
                </div>
                <span className="badge bg-info">25%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 18 Mar 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">BL</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Bonnie, Linda and <br /> Mullin
                    </a>
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
                  Coventry, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-24.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Jonelle Curtiss
                  </a>
                </div>
                <span className="badge bg-danger">70%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 15 Feb 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-success text-success rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-success">CJ</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Carlos, Jones and <br /> Jim
                    </a>
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
                  Seattle
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-25.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Jonathan Smith
                  </a>
                </div>
                <span className="badge bg-success">45%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 30 Jan 2024
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
                Proposal Made
              </h6>
              <span>50 Leads - $18,83,013</span>
            </div>
            <div className="d-flex align-items-center">
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
                    data-bs-target="#delete_deal"
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">FJ</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Freda,Jennfier and <br />
                      Thompson
                    </a>
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
                  London, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-17.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Sidney Franks
                  </a>
                </div>
                <span className="badge bg-info">59%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 11 Apr 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">BF</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Bruce, Faulkner and <br /> Lela
                    </a>
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
                  Detroit, United State
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-26.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Brook Carter
                  </a>
                </div>
                <span className="badge bg-danger">72%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 17 Apr 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">LP</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Lawrence, Patrick and <br /> Vandorn
                    </a>
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
                  Manchester, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-15.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Mickey
                  </a>
                </div>
                <span className="badge bg-danger">20%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 10 Feb 2024
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
              <h6 className="fw-semibold d-flex align-items-center mb-1">
                <i className="ti ti-circle-filled fs-10 text-info me-1" />
                Appointment
              </h6>
              <span>45 Leads - $15,44,540</span>
            </div>
            <div className="d-flex align-items-center">
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
                    data-bs-target="#delete_deal"
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">HT</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Howell, Tremblay <br />
                      and Rath
                    </a>
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
                  London, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-17.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Sidney Franks
                  </a>
                </div>
                <span className="badge bg-danger">59%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 11 Apr 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-danger text-danger rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-danger">BF</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Bruce, Faulkner and <br /> Lela
                    </a>
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
                  Detroit, United State
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-26.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Brook Carter
                  </a>
                </div>
                <span className="badge bg-danger">72%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 17 Apr 2024
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
          <div className="card kanban-card border mb-0 mt-3 shadow">
            <div className="card-body">
              <div className="d-block">
                <div className="d-flex align-items-center mb-3">
                  <a
                    href="deals-details.html"
                    className="avatar bg-soft-info text-info rounded-circle flex-shrink-0 me-2"
                  >
                    <span className="avatar-title text-info">LP</span>
                  </a>
                  <h6 className="fw-medium fs-14 mb-0">
                    <a href="deals-details.html">
                      Lawrence, Patrick and <br /> Vandorn
                    </a>
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
                  Manchester, United States
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    className="avatar avatar-xs flex-shrink-0 me-2"
                  >
                    <img
                      src="/assets/img/profiles/avatar-15.jpg"
                      alt="Img"
                      className="rounded-circle"
                    />
                  </a>
                  <a href="javascript:void(0);" className="text-default">
                    Mickey
                  </a>
                </div>
                <span className="badge bg-info">20%</span>
              </div>
              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                <span>
                  <i className="ti ti-calendar-due" /> 10 Feb 2024
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
  {/* /Deals Kanban */}
</div>

      {/* Add Canvas */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_add"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Add New Deal</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="deals.html">
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
                    <a
                      href="javascript:void(0);"
                      className="label-add link-primary"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas_pipeline"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </a>
                  </div>
                  <select className="select">
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
                  <select className="select">
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
                  <select className="select">
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
                  <select className="select">
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
                    Contact <span className="text-danger">*</span>
                  </label>
                  <select className="multiple-img" multiple="multiple">
                    <option
                      data-image="/assets/img/profiles/avatar-19.jpg"
                      selected=""
                    >
                      Darlee Robertson
                    </option>
                    <option data-image="/assets/img/profiles/avatar-20.jpg">
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
                    defaultValue="Devops Design, MargrateDesign, UI for Chat"
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
                  <select className="multiple-img" multiple="multiple">
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
                  <select className="select">
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
                  <select className="select">
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
                data-bs-target="#create_success"
              >
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Add Canvas */}
      {/* edit Canvas */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_edit"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Edit Deal</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="deals.html">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Deal Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Annual Software Subscription"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">
                      Pipeine <span className="text-danger">*</span>
                    </label>
                    <a
                      href="javascript:void(0);"
                      className="label-add link-primary"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas_pipeline"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </a>
                  </div>
                  <select className="select">
                    <option>Choose</option>
                    <option selected="">Sales</option>
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
                  <select className="select">
                    <option>Choose</option>
                    <option selected="">Open</option>
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
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="$04,51,000"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Currency <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Choose</option>
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
                    Period <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Choose</option>
                    <option selected="">Days</option>
                    <option>Month</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Period Value <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Collins"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Contact <span className="text-danger">*</span>
                  </label>
                  <select className="multiple-img" multiple="multiple">
                    <option
                      data-image="/assets/img/profiles/avatar-19.jpg"
                      selected=""
                    >
                      Darlee Robertson
                    </option>
                    <option data-image="/assets/img/profiles/avatar-20.jpg">
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
                    defaultValue="Devops Design, MargrateDesign, UI for Chat"
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
                      defaultValue="20 Jan 2025"
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
                      defaultValue="15 May 2025"
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
                  <select className="multiple-img" multiple="multiple">
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
                      defaultValue="20 Sep 2025"
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
                  <select className="select">
                    <option>Select</option>
                    <option>Google</option>
                    <option selected="">Social Media</option>
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
                  <select className="select">
                    <option>Select</option>
                    <option selected="">High</option>
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
                  <div className="editor pages-editor">
                    Key decision-maker overseeing operations and strategic
                    planning. Responsible for approving major deals and
                    partnerships. Prefers direct communication via email.
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
      {/* /edit Canvas */}
      {/* success modal */}
      <div className="modal fade" id="create_success">
        <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
          <div className="modal-content rounded-0">
            <div className="modal-body p-4 text-center position-relative">
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-success border-0 text-success rounded-circle">
                  <i className="ti ti-medal fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Deal Created Successfully!!!</h5>
              <p className="mb-3">View the details of deal, created</p>
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-light position-relative z-1 me-2 w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <a
                  href="deals-details.html"
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
      <div className="modal fade" id="delete_deal">
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
                Are you sure you want to remove deal you selected.
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
      {/* Add New Pipeline */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_pipeline"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Add New Pipeline</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="deals.html">
            <div>
              <div className="mb-3">
                <label className="form-label">
                  Pipeline Name <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="mb-3">
                <div className="pipe-title d-flex align-items-center justify-content-between mb-2">
                  <label className="form-label m-0">Pipeline Stages</label>
                  <a
                    href="#"
                    className="add-stage link-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_stage"
                  >
                    <i className="ti ti-plus me-1" />
                    Add New
                  </a>
                </div>
                <div className="pipeline-listing">
                  <div className="pipeline-item d-flex align-items-center justify-content-between p-2 shadow-sm bg-white mb-1 border-start border-3 border-warning">
                    <p className="mb-0 fw-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Inpipeline
                    </p>
                    <div className="action-pipeline">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_stage"
                        className="btn btn-sm btn-outline-light border-0"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_stage"
                        className="btn btn-sm btn-outline-light border-0"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </a>
                    </div>
                  </div>
                  <div className="pipeline-item d-flex align-items-center justify-content-between p-2 shadow-sm bg-white mb-1 border-start border-3 border-warning">
                    <p className="mb-0 me-3 fw-semibold text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Follow Up
                    </p>
                    <div className="action-pipeline">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_stage"
                        className="btn btn-sm btn-outline-light border-0"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_stage"
                        className="btn btn-sm btn-outline-light border-0"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </a>
                    </div>
                  </div>
                  <div className="pipeline-item d-flex align-items-center justify-content-between p-2 shadow-sm bg-white mb-1 border-start border-3 border-warning">
                    <p className="mb-0 me-3 fw-semibold text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Schedule
                      Service
                    </p>
                    <div className="action-pipeline">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_stage"
                        className="btn btn-sm btn-outline-light border-0"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </a>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_stage"
                        className="btn btn-sm btn-outline-light border-0"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Access</label>
                <div className="d-flex flex-wrap access-item nav mb-3">
                  <div
                    className="radio-btn me-2"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                  >
                    <input
                      type="radio"
                      className="status-radio"
                      id="all"
                      name="status"
                      defaultChecked=""
                    />
                    <label htmlFor="all">All</label>
                  </div>
                  <div
                    className="radio-btn"
                    data-bs-toggle="tab"
                    data-bs-target="#select-person"
                  >
                    <input
                      type="radio"
                      className="status-radio"
                      id="select"
                      name="status"
                    />
                    <label htmlFor="select">Select Person</label>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade" id="select-person">
                    <div className="access-wrapper">
                      <div className="d-flex align-items-center mb-1 justify-content-between shadow-sm rounded p-2 bg-white border">
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar avatar-sm">
                            <img
                              src="/assets/img/profiles/avatar-21.jpg"
                              alt="Image"
                              className="rounded-circle"
                            />
                          </div>
                          <span>Vaughan Lewis</span>
                        </div>
                        <a href="javascript:void(0);" className="link-primary">
                          Remove
                        </a>
                      </div>
                      <div className="d-flex align-items-center mb-1 justify-content-between shadow-sm rounded p-2 bg-white border">
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar avatar-sm">
                            <img
                              src="/assets/img/profiles/avatar-08.jpg"
                              alt="Image"
                              className="rounded-circle"
                            />
                          </div>
                          <span>Katherine Brooks</span>
                        </div>
                        <a href="javascript:void(0);" className="link-primary">
                          Remove
                        </a>
                      </div>
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
              <button type="button" className="btn btn-primary">
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Add New Pipeline */}
      {/* Add New Stage */}
      <div className="modal custom-modal fade" id="add_stage" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-0">Add New Stage</h5>
              <button
                className="btn-close custom-btn-close border p-1 me-0 text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="deals.html">
              <div className="modal-body">
                <div className="mb-0">
                  <label className="form-label">
                    Stage Name<span className="ms-1 text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-btn text-end p-3 border-top">
                <a
                  href="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button type="submit" className="btn btn-danger">
                  Create New
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add New Stage */}
      {/* Edit Stage */}
      <div className="modal custom-modal fade" id="edit_stage" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-0">Edit Stage</h5>
              <button
                className="btn-close custom-btn-close border p-1 me-0 text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="deals.html">
              <div className="modal-body">
                <div className="mb-0">
                  <label className="form-label">
                    Edit Stage<span className="ms-1 text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Inpipeline"
                  />
                </div>
              </div>
              <div className="modal-btn text-end p-3 border-top">
                <a
                  href="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <button type="submit" className="btn btn-danger">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Stage */}
      {/* delete stage */}
      <div className="modal fade" id="delete_stage">
        <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
          <div className="modal-content rounded-0">
            <div className="modal-body p-4 text-center position-relative">
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Remove Stage</h5>
              <p className="mb-3">
                Are you sure you want to remove stage you selected.
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
      {/* delete  stage */}
    </>
  );
}
