'use client';
import Link from 'next/link';
import React from 'react'
import SettingsHeader from '../../components/SettingsHeader'
import GeneralSettingsSidebar from "../../components/GeneralSettingsSidebar";

export default function ProfileSettings() {
  return (
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
  <SettingsHeader />
 {" "}
  {/* end card */}
  {/* start row */}
  <div className="row">
    <div className="col-xl-3 col-lg-12 theiaStickySidebar">
      <div className="card mb-3 mb-xl-0">
        <div className="card-body">
       <GeneralSettingsSidebar/>
        </div>{" "}
        {/* end card body */}
      </div>{" "}
      {/* end card */}
    </div>{" "}
    {/* end col */}
    <div className="col-xl-9 col-lg-12">
      <div className="card mb-0">
        <div className="card-body">
          <div className="border-bottom mb-3 pb-3">
            <h5 className="mb-0 fs-17">Profile</h5>
          </div>
          <form action="profile-settings">
            <div className="mb-3">
              <h6 className="mb-1">Super Admin Information</h6>
              <p className="mb-0">Provide the information below</p>
            </div>
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
                    id="removeImage1"
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
                  <p className="mb-0">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>
            </div>
            <div className="border-bottom mb-3">
              {/* start row */}
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            <div className="border-bottom mb-3">
              <div className="mb-3">
                <h6 className="mb-1">Address</h6>
                <p className="mb-0">Please enter the address details</p>
              </div>
              {/* start row */}
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-6 col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <select className="select">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>{" "}
                {/* end col */}
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
                </div>{" "}
                {/* end col */}
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
                </div>{" "}
                {/* end col */}
                <div className="col-lg-6 col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Postal Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
              <a href="#" className="btn btn-sm btn-light">
                Cancel
              </a>
              <button type="submit" className="btn btn-sm btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>{" "}
        {/* end card body */}
      </div>{" "}
      {/* end card */}
    </div>{" "}
    {/* end col */}
  </div>
  {/* end row */}
</div>

  )
}
