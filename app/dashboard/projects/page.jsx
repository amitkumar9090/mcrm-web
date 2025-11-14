import React from "react";

export default function Projects() {
  return (
    <>
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">
              Projects<span className="badge badge-soft-primary ms-2">125</span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Projects
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
                          Project Name
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
                                Turelysell
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Dreamschat
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Servbook
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                DreamsPOS
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Kofejob
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Doccure
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Best@laundry
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Dreamsports
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                SmartHR
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Dreamsports
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
                          Client Name
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
                                NovaWave LLC
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                BlueSky Industries
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Silver Hawk
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Summit Peak
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                RiverStone Ltd
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Bright Bridge Grp
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                CoastalStar Co.
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                HarborView
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Golden Gate Ltd
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Redwood Inc
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
                          data-bs-target="#type"
                          aria-expanded="false"
                          aria-controls="type"
                        >
                          Type
                        </a>
                      </div>
                      <div
                        className="filter-set-contents accordion-collapse collapse"
                        id="type"
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
                                Web App
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Client Meeting
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Mobile App
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                UI/UX Design
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Product Lanuch
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Bug Fixing
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Content creation
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Sales Demo
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                QA Testing
                              </label>
                            </li>
                            <li className="mb-1">
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Customer Support
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
                          data-bs-target="#date"
                          aria-expanded="false"
                          aria-controls="date"
                        >
                          Start Date
                        </a>
                      </div>
                      <div
                        className="filter-set-contents accordion-collapse collapse"
                        id="date"
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
                          data-bs-target="#date2"
                          aria-expanded="false"
                          aria-controls="date2"
                        >
                          End Date
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
                    <div className="filter-set-content">
                      <div className="filter-set-content-head">
                        <a
                          href="#"
                          className="collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#stage"
                          aria-expanded="false"
                          aria-controls="stage"
                        >
                          Pipeline Stage
                        </a>
                      </div>
                      <div
                        className="filter-set-contents accordion-collapse collapse"
                        id="stage"
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
                                Develop
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Meeting
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Design
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Launch
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Fix
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Write
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Demo
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Test
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center">
                                <input
                                  className="form-check-input m-0 me-1"
                                  type="checkbox"
                                />
                                Support
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
                      href="javascript:void(0);"
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
                href="projects-list.html"
                className="btn btn-sm p-1 border-0 fs-14"
              >
                <i className="ti ti-list-tree" />
              </a>
              <a
                href="projects.html"
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
              Add New Project
            </a>
          </div>
        </div>
        {/* table header */}
        {/* Projects List */}
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/truellysel.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Truelysell</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12145
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $03,50,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 15 Oct 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-14.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-15.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-16.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +05
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border rounded-circle flex-shrink-0">
                        <img
                          src="/assets/img/icons/company-icon-01.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 100
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/dreamchat.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Dreamschat</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12145
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $02,15,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 19 Oct 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-01.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-02.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-03.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +04
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-02.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 80
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/truellysell.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Truelysell</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12147
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $01,45,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 12 Oct 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-04.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-05.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-06.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +04
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-03.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 75
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/servbook.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Servbook</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12148
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $02,15,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 24 Oct 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-07.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-08.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-09.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +04
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-04.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 75
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/dream-pos.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">DreamPOS</a>
                      </h5>
                      <p className="mb-0 fs-13">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12149
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $03,64,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 22 Oct 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-10.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-11.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-12.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +03
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-05.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 60
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/project-01.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Kofejob</a>
                      </h5>
                      <p className="fs-13 mb-0">Meeting</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12150
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $02,12,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 09 Dec 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-15.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-16.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-17.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +03
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-06.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 96
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/project-01.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Doccure</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12151
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,18,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 16 Dec 2023
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-18.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-19.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-20.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +03
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-07.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 80
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/best.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Best@laundry</a>
                      </h5>
                      <p className="fs-13 mb-0">Meeting</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12152
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $01,23,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 13 Jan 2024
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-21.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-22.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-23.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +02
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-08.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 65
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/dream-pos.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">POS</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12153
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $03,64,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 11 Jan 2024
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-24.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-25.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-26.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +02
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-09.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 65
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/servbook.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Servbook</a>
                      </h5>
                      <p className="fs-13 mb-0">Meeting</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12153
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,10,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 29 Jan 2024
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-27.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-22.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-05.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +02
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-10.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 56
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/dreamchat.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Dreamchat</a>
                      </h5>
                      <p className="fs-13 mb-0">Meeting</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12154
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,10,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 30 Jan 2024
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-08.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-12.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-15.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +02
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-01.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 60
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <div className="card border">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <span className="badge badge-tag badge-soft-danger  text-danger me-2 border-0">
                      <i className="ti ti-square-rounded-filled text-danger fs-8 me-1" />
                      High
                    </span>
                    <span className="badge bg-success">Active</span>
                  </div>
                  <span className="avatar avatar-xs fs-16">
                    <i className="ti ti-star-filled text-warning" />
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between bg-light rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <a
                      href="project-details.html"
                      className="avatar border rounded-circle bg-white flex-shrink-0 me-2"
                    >
                      <img
                        src="/assets/img/priority/sports.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </a>
                    <div>
                      <h5 className="fw-medium fs-14">
                        <a href="project-details.html">Sports</a>
                      </h5>
                      <p className="fs-13 mb-0">Web App</p>
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
                        data-bs-target="#delete_project"
                      >
                        <i className="ti ti-trash" /> Delete
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-clipboard-copy text-green" /> Clone
                        this Project
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-printer" /> Print
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        <i className="ti ti-subtask" /> Add New Task
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-block">
                  <p className="mb-3">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="mb-3">
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID : #12155
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,10,000
                    </p>
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 31 Jan 2024
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="avatar-list-stacked avatar-group-sm">
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-08.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src="/assets/img/profiles/avatar-12.jpg"
                          alt="img"
                        />
                      </span>
                      <span className="avatar avatar-rounded">
                        <img
                          src="/assets/img/profiles/avatar-15.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        className="avatar text-dark bg-light border avatar-rounded fs-10"
                        href="javascript:void(0);"
                      >
                        +02
                      </a>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm p-1 border flex-shrink-0 rounded-circle">
                        <img
                          src="/assets/img/icons/company-icon-02.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <span className="badge badge-sm bg-soft-info text-info">
                    <i className="ti ti-clock-stop me-2" />
                    Total Hours : 60
                  </span>
                  <div className="d-flex align-items-center">
                    <span className="d-inline-flex align-items-center me-2">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="d-inline-flex align-items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Projects List */}
        <div className="load-btn text-center">
          <a href="javascript:void(0);" className="btn btn-primary">
            <i className="ti ti-loader me-1" />
            Load More
          </a>
        </div>
      </div>

      {/* Add Canvas */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_add"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Add New Project</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="projects-list.html">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project ID<span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project Type <span className="text-danger">*</span>
                  </label>
                  <select className="select2" data-toggle="select2">
                    <option>Choose</option>
                    <option>Mobile App</option>
                    <option>Meeting</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Client <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option>NovaWave LLC</option>
                    <option>Silver Hawk</option>
                    <option>Harbor View</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option>Harbor View</option>
                    <option>LLC</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project Timing <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option>Hourly</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Less than 1 Month</option>
                    <option>Less than 3 months</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Price <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Responsible Persons <span className="text-danger">*</span>
                  </label>
                  <select
                    className="multiple-img"
                    multiple="multiple"
                    data-toggle=" multiple"
                  >
                    <option
                      data-image="assets/img/profiles/avatar-02.jpg"
                      selected=""
                    >
                      Robert Johnson
                    </option>
                    <option data-image="assets/img/users/user-01.jpg">
                      Sharon Roy
                    </option>
                    <option data-image="assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Team Leader <span className="text-danger">*</span>
                  </label>
                  <select
                    className="multiple-img"
                    multiple="multiple"
                    data-toggle=" multiple"
                  >
                    <option
                      data-image="assets/img/profiles/avatar-19.jpg"
                      selected=""
                    >
                      Darlee Robertson
                    </option>
                    <option data-image="assets/img/users/user-01.jpg">
                      Sharon Roy
                    </option>
                    <option data-image="assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                      placeholder="dd/mm/yyyy"
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
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                      placeholder="dd/mm/yyyy"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <select className="select">
                    <option>Select</option>
                    <option>High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select className="select">
                    <option>Select</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
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
      {/* Add Canvas */}
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_edit"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Edit Project</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="projects-list.html">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Truelysell"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project ID<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="#274729"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project Type <span className="text-danger">*</span>
                  </label>
                  <select className="select2" data-toggle="select2">
                    <option>Choose</option>
                    <option selected="">Mobile App</option>
                    <option>Meeting</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Client <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option selected="">NovaWave LLC</option>
                    <option>Silver Hawk</option>
                    <option>Harbor View</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option selected="">Harbor View</option>
                    <option>LLC</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project Timing <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option selected="">Hourly</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Less than 1 Month</option>
                    <option>Less than 3 months</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Price <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="2,15,000"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Responsible Persons <span className="text-danger">*</span>
                  </label>
                  <select
                    className="multiple-img"
                    multiple="multiple"
                    data-toggle=" multiple"
                  >
                    <option
                      data-image="assets/img/profiles/avatar-02.jpg"
                      selected=""
                    >
                      Robert Johnson
                    </option>
                    <option data-image="assets/img/users/user-01.jpg">
                      Sharon Roy
                    </option>
                    <option data-image="assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Team Leader <span className="text-danger">*</span>
                  </label>
                  <select
                    className="multiple-img"
                    multiple="multiple"
                    data-toggle=" multiple"
                  >
                    <option
                      data-image="assets/img/profiles/avatar-19.jpg"
                      selected=""
                    >
                      Darlee Robertson
                    </option>
                    <option data-image="assets/img/users/user-01.jpg">
                      Sharon Roy
                    </option>
                    <option data-image="assets/img/profiles/avatar-21.jpg">
                      Vaughan Lewis
                    </option>
                    <option data-image="assets/img/profiles/avatar-23.jpg">
                      Jessica Louise
                    </option>
                    <option data-image="assets/img/profiles/avatar-16.jpg">
                      Carol Thomas
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                      defaultValue="23/11/2025"
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
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <input
                      type="text"
                      className="form-control"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                      defaultValue="17/12/2025"
                    />
                    <span className="input-group-text">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <select className="select">
                    <option>Select</option>
                    <option selected="">High</option>
                    <option>Low</option>
                    <option>Medium</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select className="select">
                    <option>Select</option>
                    <option selected="">Active</option>
                    <option>Inactive</option>
                  </select>
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
                      "Provides a multiple ondemand service marketplace"
                    }
                  />
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
      {/* success modal */}
      <div className="modal fade" id="create_success">
        <div className="modal-dialog modal-dialog-centered modal-sm rounded-0">
          <div className="modal-content rounded-0">
            <div className="modal-body p-4 text-center position-relative">
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-xl badge-soft-info border-0 text-info rounded-circle">
                  <i className="ti ti-atom-2 fs-24" />
                </span>
              </div>
              <h5 className="mb-1">Project Created Successfully!!!</h5>
              <p className="mb-3">View the details of project, created</p>
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-light position-relative z-1 me-2 w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <a
                  href="projects-details.html"
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
      <div className="modal fade" id="delete_project">
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
                Are you sure you want to remove project you selected.
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
  );
}
