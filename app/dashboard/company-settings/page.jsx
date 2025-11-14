"use client";
import React from "react";
import Link from "next/link";

export default function companySettings() {
  return (
    <>
      {/* Hello world */}
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
          <div>
            <h4 className="mb-1">Settings</h4>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Settings
                </li>
              </ol>
            </nav>
          </div>
          <div className="gap-2 d-flex align-items-center flex-wrap">
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
        <div className="card border-0">
          <div className="card-body pb-0 pt-0 px-2">
            <ul className="nav nav-tabs nav-bordered nav-bordered-primary">
              <li className="nav-item me-3">
                <Link href="/dashboard/profile-settings" className="nav-link p-2">
                  <i className="ti ti-settings-cog me-2" />
                  General Settings
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/dashboard/company-settings" className="nav-link p-2 active">
                  <i className="ti ti-world-cog me-2" />
                  Website Settings
                </Link>
              </li>
             
              <li className="nav-item me-3">
                <Link href="/dashboard/email-settings" className="nav-link p-2">
                  <i className="ti ti-device-laptop me-2" />
                  System Settings
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/dashboard/payment-gateways" className="nav-link p-2">
                  <i className="ti ti-moneybag me-2" />
                  Financial Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard/sitemap" className="nav-link p-2">
                  <i className="ti ti-flag-cog me-2" />
                  Other Settings
                </Link>
              </li>
            </ul>
          </div>{" "}
          {/* end card body */}
        </div>{" "}
        {/* end card */}
        {/* start row */}
        <div className="row">
          <div className="col-xl-3 col-lg-12 theiaStickySidebar">
            <div className="card">
              <div className="card-body">
                <div className="settings-sidebar">
                  <h5 className="mb-3 fs-17">Website Settings</h5>
                  <div className="list-group list-group-flush settings-sidebar">
                    <Link
                      href="/dashboard/company-settings"
                      className="d-block p-2 fw-medium active"
                    >
                      Company Settings
                    </Link>
                    <Link
                      href="/dashboard/localization-settings"
                      className="d-block p-2 fw-medium"
                    >
                      Localization
                    </Link>
                    <Link
                      href="/dashboard/prefixes-settings"
                      className="d-block p-2 fw-medium"
                    >
                      Prefixes
                    </Link>
                    <Link
                      href="/dashboard/preference-settings"
                      className="d-block p-2 fw-medium"
                    >
                      Preference
                    </Link>
                    <Link
                      href="/dashboard/appearance-settings"
                      className="d-block p-2 fw-medium"
                    >
                      Appearance
                    </Link>
                    <Link
                      href="/dashboard/language-settings"
                      className="d-block p-2 fw-medium"
                    >
                      Language
                    </Link>
                  </div>
                </div>
              </div>{" "}
              {/* end card body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
          <div className="col-xl-9 col-lg-12">
            {/* Company Settings */}
            <div className="card mb-0">
              <div className="card-body">
                <div className="border-bottom mb-3 pb-3">
                  <h5 className="mb-0 fs-17">Company Settings</h5>
                </div>
                <form action="company-settings">
                  <div className="mb-3">
                    <h6 className=" mb-1">Company Information</h6>
                    <p className="mb-0">
                      Provide the company information below
                    </p>
                  </div>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Company Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Company Email Address{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Fax</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Website</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Company Images</h6>
                    <p className="mb-0">Provide the company images</p>
                  </div>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="profile-upload d-flex align-items-center">
                            <div className="profile-upload-img avatar avatar-xxl border border-dashed rounded position-relative flex-shrink-0">
                              <span>
                                <i className="ti ti-photo" />
                              </span>
                              <img
                                id="ImgPreview"
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                                className="preview1"
                              />
                              <a
                                href="javascript:void(0);"
                                className="profile-remove"
                              >
                                <i className="ti ti-x" />
                              </a>
                            </div>
                            <div className="profile-upload-content ms-3">
                              <label className="d-inline-flex align-items-center position-relative btn btn-primary btn-sm mb-2">
                                <i className="ti ti-file-broken me-1" />
                                Upload File
                                <input
                                  type="file"
                                  id="imag"
                                  className="input-img position-absolute w-100 h-100 opacity-0 top-0 end-0"
                                />
                              </label>
                              <p className="mb-0">
                                Upload Logo of your company to display in
                                website. Recommended size is 250 px*100 px
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="profile-upload d-flex align-items-center">
                            <div className="profile-upload-img avatar avatar-xxl border border-dashed rounded position-relative flex-shrink-0">
                              <span>
                                <i className="ti ti-photo" />
                              </span>
                              <img
                                id="ImgPreview2"
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                                className="preview1"
                              />
                              <a
                                href="javascript:void(0);"
                                className="profile-remove"
                              >
                                <i className="ti ti-x" />
                              </a>
                            </div>
                            <div className="profile-upload-content ms-3">
                              <label className="d-inline-flex align-items-center position-relative btn btn-primary btn-sm mb-2">
                                <i className="ti ti-file-broken me-1" />
                                Upload File
                                <input
                                  type="file"
                                  id="imag2"
                                  className="input-img position-absolute w-100 h-100 opacity-0 top-0 end-0"
                                />
                              </label>
                              <p className="mb-0">
                                Upload Logo of your company to display in
                                website. Recommended size is 250 px*100 px
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="profile-upload d-flex align-items-center">
                            <div className="profile-upload-img avatar avatar-xxl border border-dashed rounded position-relative flex-shrink-0">
                              <span>
                                <i className="ti ti-photo" />
                              </span>
                              <img
                                id="ImgPreview3"
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                                className="preview1"
                              />
                              <a
                                href="javascript:void(0);"
                                className="profile-remove"
                              >
                                <i className="ti ti-x" />
                              </a>
                            </div>
                            <div className="profile-upload-content ms-3">
                              <label className="d-inline-flex align-items-center position-relative btn btn-primary btn-sm mb-2">
                                <i className="ti ti-file-broken me-1" />
                                Upload File
                                <input
                                  type="file"
                                  id="imag3"
                                  className="input-img position-absolute w-100 h-100 opacity-0 top-0 end-0"
                                />
                              </label>
                              <p className="mb-0">
                                Upload Logo of your company to display in
                                website. Recommended size is 250 px*100 px
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="profile-upload d-flex align-items-center">
                            <div className="profile-upload-img avatar avatar-xxl border border-dashed rounded position-relative flex-shrink-0">
                              <span>
                                <i className="ti ti-photo" />
                              </span>
                              <img
                                id="ImgPreview4"
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                                className="preview1"
                              />
                              <a
                                href="javascript:void(0);"
                                className="profile-remove"
                              >
                                <i className="ti ti-x" />
                              </a>
                            </div>
                            <div className="profile-upload-content ms-3">
                              <label className="d-inline-flex align-items-center position-relative btn btn-primary btn-sm mb-2">
                                <i className="ti ti-file-broken me-1" />
                                Upload File
                                <input
                                  type="file"
                                  id="imag4"
                                  className="input-img position-absolute w-100 h-100 opacity-0 top-0 end-0"
                                />
                              </label>
                              <p className="mb-0">
                                Upload Logo of your company to display in
                                website. Recommended size is 250 px*100 px
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Address</h6>
                    <p className="mb-0">
                      Please enter the company address details
                    </p>
                  </div>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Address</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Country</label>
                          <select className="select">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Germany</option>
                            <option>France</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">State / Province</label>
                          <select className="select">
                            <option>California</option>
                            <option>New York</option>
                            <option>Texas</option>
                            <option>Florida</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">City</label>
                          <select className="select">
                            <option>Los Angeles</option>
                            <option>San Diego</option>
                            <option>Fresno</option>
                            <option>San Francisco</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Zip Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
                    <a href="#" className="btn btn-light">
                      Cancel
                    </a>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /Company Settings */}
          </div>
        </div>
      </div>
    </>
  );
}
