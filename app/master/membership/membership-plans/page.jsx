import React from "react";

export default function membershipPlans() {
  return (
    <>
      <div className="content pb-0">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">
              Membership Plans
              <span className="badge badge-soft-primary ms-2">152</span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Membership plans
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
                      Export as Excel
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
        {/* card start */}
        <div className="card border-0 rounded-0">
          <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="input-icon input-icon-start position-relative">
              <span className="input-icon-addon text-dark">
             
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <a
              href="javascript:void(0);"
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas_add"
            >
              <i className="ti ti-square-rounded-plus-filled me-1" />
              Add Membership
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="d-block">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <p className="text-dark mb-0">Yearly</p>
                <div className="form-check form-switch ms-2 me-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    defaultChecked=""
                  />
                </div>
                <p className="text-dark mb-0">Monthly</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center border-bottom pb-3 mb-3">
                        <span>Basic</span>
                        <h5 className="d-flex align-items-center mb-0 justify-content-center mt-1">
                          $50{" "}
                          <span className="fs-14 fw-medium ms-1">/ month</span>
                        </h5>
                      </div>
                      <div className="d-block">
                        <div>
                          <p className="d-flex align-items-center fs-16 text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            10 Contacts
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            10 Leads
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            20 Companies
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            50 Compaigns
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            100 Projects
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-body" />
                            </span>
                            <del>Deals</del>
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-body" />
                            </span>
                            <del>Tasks</del>
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-body" />
                            </span>
                            <del>Pipelines</del>
                          </p>
                        </div>
                        <div className="text-center mt-3">
                          <a href="#" className="btn btn-primary w-100">
                            Choose
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center border-bottom pb-3 mb-3">
                        <span>Business</span>
                        <h5 className="d-flex align-items-center mb-0 justify-content-center mt-1">
                          $200{" "}
                          <span className="fs-14 fw-medium ms-1">/ month</span>
                        </h5>
                      </div>
                      <div className="d-block">
                        <div>
                          <p className="d-flex align-items-center fs-16 text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            20 Contacts
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            20 Leads
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            50 Companies
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Compaigns
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Projects
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-body" />
                            </span>
                            <del>Deals</del>
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-body" />
                            </span>
                            <del>Tasks</del>
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-body" />
                            </span>
                            <del>Pipelines</del>
                          </p>
                        </div>
                        <div className="text-center mt-3">
                          <a href="#" className="btn btn-primary w-100">
                            Choose
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center border-bottom pb-3 mb-3">
                        <span>Enterprise</span>
                        <h5 className="d-flex align-items-center mb-0 justify-content-center mt-1">
                          $400{" "}
                          <span className="fs-14 fw-medium ms-1">/ month</span>
                        </h5>
                      </div>
                      <div className="d-block">
                        <div>
                          <p className="d-flex align-items-center fs-16 text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Contacts
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Leads
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Companies
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Compaigns
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Unlimited Projects
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Deals
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Tasks
                          </p>
                          <p className="d-flex align-items-center fs-16 fw-medium text-dark">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-success" />
                            </span>
                            Pipelines
                          </p>
                        </div>
                        <div className="text-center mt-3">
                          <a href="#" className="btn btn-primary w-100">
                            Choose
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
      <div
        className="offcanvas offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="offcanvas_add"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="mb-0">Add New Plan</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action="membership-plans.html">
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
                      <i className="ti ti-file-description" />
                    </span>
                    Plan Info
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id="basic"
                  data-bs-parent="#main_accordion"
                >
                  <div className="accordion-body border-top pb-0">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Plan Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Plan Type <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select</option>
                            <option>Basic</option>
                            <option>Business</option>
                            <option>Enterprise</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Plan Price <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select</option>
                            <option>$50</option>
                            <option>$200</option>
                            <option>$400</option>
                          </select>
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
                      <i className="ti ti-settings" />
                    </span>
                    Plan Settings
                  </a>
                </div>
                <div
                  className="accordion-collapse collapse"
                  id="address"
                  data-bs-parent="#main_accordion"
                >
                  <div className="accordion-body border-top pb-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Contacts <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck1"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Leads <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Companies <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck3"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Compaigns <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck4"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Projects <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck5"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Deals <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck6"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Tasks <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Pipelines <span className="text-danger">*</span>
                          </label>
                          <div className="d-flex align-items-center">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="0-100"
                            />
                            <div className="form-check form-switch ms-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                          <div className="form-check mt-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck8"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck8"
                            >
                              Unlimited
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Address Info */}
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
