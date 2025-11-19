import Link from "next/link";
import React from "react";

export default function bankAccount() {
  return (
    <>
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
        {/* Settings Menu */}
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
                <Link href="/dashboard/company-settings" className="nav-link p-2">
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
                <Link href="/dashboard/payment-gateways" className="nav-link p-2 active">
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
        {/* /Settings Menu */}
        {/* start row */}
        <div className="row row-gap-3">
          <div className="col-xl-3 col-lg-12 theiaStickySidebar">
            {/* Settings Sidebar */}
            <div className="card mb-0">
              <div className="card-body">
                <div className="settings-sidebar">
                  <h4 className="fs-17 mb-3">Financial Settings</h4>
                  <div className="list-group list-group-flush settings-sidebar">
                    <Link
                      href="payment-gateways"
                      className="d-block p-2 fw-medium"
                    >
                      Payment Gateways
                    </Link>
                    <Link
                      href="bank-accounts"
                      className="d-block p-2 fw-medium active"
                    >
                      Bank Accounts
                    </Link>
                    <Link href="/dashboard/tax-rates" className="d-block p-2 fw-medium">
                      Tax Rates
                    </Link>
                    <Link href="/dashboard/currencies" className="d-block p-2 fw-medium">
                      Currencies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Settings Sidebar */}
          </div>
          <div className="col-xl-9 col-lg-12">
            {/* Settings Info */}
            <div className="card mb-0">
              <div className="card-body">
                <div className="border-bottom mb-3 pb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h4 className="fs-17 mb-0">Bank Accounts</h4>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#add_bank"
                  >
                    <i className="ti ti-square-rounded-plus-filled me-1" />
                    Add New Account
                  </a>
                </div>
                <div className="row row-gap-3">
                  {/* Bank Account */}
                  <div className="col-xxl-4 col-sm-6">
                    <div className="position-relative">
                      <input
                        type="radio"
                        name="bank"
                        id="bank1"
                        className="bank-radio"
                        defaultChecked=""
                      />
                      <div className="bank-box">
                        <div className="check-icon" />
                        <div className="mb-4">
                          <h5 className="fw-bold mb-1 fs-16">HDFC</h5>
                          <p className="mb-0 fs-14">**** **** 4872</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="fw-semibold mb-1 fs-14">
                              Holder Name
                            </h6>
                            <p className="fs-13">Darlee Robertson</p>
                          </div>
                          <div className="dropdown table-action position-relative z-1">
                            <a
                              href="#"
                              className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_bank"
                              >
                                <i className="ti ti-edit text-blue me-1" />
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_bank"
                              >
                                <i className="ti ti-trash text-blue me-1" />
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Bank Account */}
                  {/* Bank Account */}
                  <div className="col-xxl-4 col-sm-6">
                    <div className="position-relative">
                      <input
                        type="radio"
                        name="bank"
                        id="bank2"
                        className="bank-radio"
                      />
                      <div className="bank-box">
                        <div className="check-icon" />
                        <div className="mb-4">
                          <h5 className="fw-bold mb-1 fs-16">SBI</h5>
                          <p className="mb-0 fs-14">**** **** 2495</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="fw-semibold mb-1 fs-14">
                              Holder Name
                            </h6>
                            <p className="fs-13">Sharon Roy</p>
                          </div>
                          <div className="dropdown table-action position-relative z-1">
                            <a
                              href="#"
                              className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_bank"
                              >
                                <i className="ti ti-edit text-blue me-1" />
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_bank"
                              >
                                <i className="ti ti-trash text-blue me-1" />
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Bank Account */}
                  {/* Bank Account */}
                  <div className="col-xxl-4 col-sm-6">
                    <div className="position-relative">
                      <input
                        type="radio"
                        name="bank"
                        id="bank3"
                        className="bank-radio"
                      />
                      <div className="bank-box">
                        <div className="check-icon" />
                        <div className="mb-4">
                          <h5 className="fw-bold mb-1 fs-16">KVB</h5>
                          <p className="mb-0 fs-14">**** **** 3948</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="fw-semibold mb-1 fs-14">
                              Holder Name
                            </h6>
                            <p className="fs-13">Vaughan Lewis</p>
                          </div>
                          <div className="dropdown table-action position-relative z-1">
                            <a
                              href="#"
                              className="action-icon btn btn-xs shadow btn-icon btn-outline-light "
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_bank"
                              >
                                <i className="ti ti-edit text-blue me-1" />
                                Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_bank"
                              >
                                <i className="ti ti-trash text-blue me-1" />
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Bank Account */}
                </div>
              </div>
            </div>
            {/* /Settings Info */}
          </div>
        </div>
        {/* end row */}
      </div>
      {/* Add Bank Account */}
      <div className="modal fade" id="add_bank" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Bank Account</h5>
              <button
                type="button"
                className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="bank-accounts">
              <div className="modal-body">
                <div className="mb-3 ">
                  <label className="form-label">
                    Bank Name <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option>HDFC</option>
                    <option>SBI</option>
                    <option>KVB</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Holder Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Number <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Branch Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    ABA Number <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end m-0">
                  <a
                    href="#"
                    className="btn btn-sm btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Bank Account */}
      {/* Edit Bank Account */}
      <div className="modal fade" id="edit_bank" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Bank Account</h5>
              <button
                type="button"
                className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="bank-accounts">
              <div className="modal-body">
                <div className="mb-3 ">
                  <label className="form-label">
                    Bank Name <span className="text-danger">*</span>
                  </label>
                  <select className="select">
                    <option>Select</option>
                    <option selected="">HDFC</option>
                    <option>SBI</option>
                    <option>KVB</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Holder Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Darlee Robertson"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Account Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="**** **** 4872"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Branch Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="HDFC"
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    ABA Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={1234567}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end m-0">
                  <a
                    href="#"
                    className="btn btn-sm btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Add New
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Bank Account */}
      {/* delete modal */}
      <div className="modal fade" id="delete_bank">
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
                Are you sure you want to remove account you selected.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-sm btn-light position-relative z-1 me-2 w-100"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-primary position-relative z-1 w-100"
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
