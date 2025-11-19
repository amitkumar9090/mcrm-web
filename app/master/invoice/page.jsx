import React from 'react'

export default function Invoice() {
  return (
   <>
  <div className="content content-two">
    {/* Page Header */}
    <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
      <div>
        <h4 className="mb-1">Invoices</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Invoices
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
    {/* start row */}
    <div className="row">
      <div className="col-xl-3 col-sm-6">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center overflow-hidden mb-2">
              <div>
                <p className="mb-1 text-truncate">Total Invoice</p>
                <h6 className="mb-0">$3,237.94</h6>
              </div>
            </div>
            <div className="attendance-report-bar mb-2">
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: 5 }}
              >
                <div
                  className="progress-bar bg-pink"
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div>
              <p className="d-flex align-items-center text-truncate mb-0">
                <span className="text-success fs-12 d-flex align-items-center me-1">
                  <i className="ti ti-arrow-wave-right-up me-1" />
                  +32.40%
                </span>
                from last month
              </p>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* end col */}
      <div className="col-xl-3 col-sm-6">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center overflow-hidden mb-2">
              <div>
                <p className="mb-1 text-truncate">Outstanding</p>
                <h6 className="mb-0">$3,237.94</h6>
              </div>
            </div>
            <div className="attendance-report-bar mb-2">
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: 5 }}
              >
                <div
                  className="progress-bar bg-purple"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div>
              <p className="d-flex align-items-center text-truncate mb-0">
                <span className="text-danger fs-12 d-flex align-items-center me-1">
                  <i className="ti ti-arrow-wave-right-up me-1" />
                  -4.40%
                </span>
                from last month
              </p>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* end col */}
      <div className="col-xl-3 col-sm-6">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center overflow-hidden mb-2">
              <div>
                <p className="mb-1 text-truncate">Draft</p>
                <h6 className="mb-0">$3,237.94</h6>
              </div>
            </div>
            <div className="attendance-report-bar mb-2">
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: 5 }}
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "30%" }}
                />
              </div>
            </div>
            <div>
              <p className="d-flex align-items-center text-truncate mb-0">
                <span className="text-success fs-12 d-flex align-items-center me-1">
                  <i className="ti ti-arrow-wave-right-up me-1" />
                  12%
                </span>
                from last month
              </p>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* end col */}
      <div className="col-xl-3 col-sm-6">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center overflow-hidden mb-2">
              <div>
                <p className="mb-1 text-truncate">Total Overdue</p>
                <h6 className="mb-0">$3,237.94</h6>
              </div>
            </div>
            <div className="attendance-report-bar mb-2">
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ height: 5 }}
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "20%" }}
                />
              </div>
            </div>
            <div>
              <p className="d-flex align-items-center text-truncate mb-0">
                <span className="text-danger fs-12 d-flex align-items-center me-1">
                  <i className="ti ti-arrow-wave-right-up me-1" />
                  -15.40%
                </span>
                from last month
              </p>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* end col */}
    </div>
    {/* end row */}
    {/* start row */}
    <div className="row">
      <div className="col-sm-12">
        <div>
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <h5 className="d-flex align-items-center mb-0">
              Invoices
              <span className="badge bg-soft-dark ms-2 text-dark fs-12">
                2000 Invoices
              </span>
            </h5>
            <a
              href="add-invoices.html"
              className="btn btn-md btn-primary d-flex align-items-center"
            >
              <i className="ti ti-circle-plus me-2" />
              Add Invoices
            </a>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-nowrap border">
                <thead className="table-light">
                  <tr>
                    <th>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="select-all"
                        />
                      </div>
                    </th>
                    <th />
                    <th>Invoice</th>
                    <th>Name</th>
                    <th>Created On</th>
                    <th>Total</th>
                    <th>Amount Due</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-1454</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-01.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Anthony Lewis</a>
                          </h6>
                          <span className="fs-12">anthony@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>14 Jan 2024, 04:27 AM </td>
                    <td>$300</td>
                    <td>$0</td>
                    <td>14 Jan 2024, 04:27 AM</td>
                    <td>
                      <span className="badge badge-soft-success">Paid</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-6571</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-09.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Brian Villalobos</a>
                          </h6>
                          <span className="fs-12">brian@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>21 Jan 2024, 03:19 AM</td>
                    <td>$547</td>
                    <td>$200</td>
                    <td>21 Jan 2024, 03:19 AM</td>
                    <td>
                      <span className="badge badge-soft-danger">Overdue</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-2245</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-01.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Harvey Smith</a>
                          </h6>
                          <span className="fs-12">harvey@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>20 Feb 2024, 12:15 PM</td>
                    <td>$325</td>
                    <td>$65</td>
                    <td>20 Feb 2024, 12:15 PM</td>
                    <td>
                      <span className="badge badge-soft-primary">Pending</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-1456</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Stephan Peralt</a>
                          </h6>
                          <span className="fs-12">peral@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>15 Mar 2024, 12:11 AM</td>
                    <td>$471</td>
                    <td>$145</td>
                    <td>15 Mar 2024, 12:11 AM</td>
                    <td>
                      <span className="badge badge-soft-primary">Pending</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-0045</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-03.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Doglas Martini</a>
                          </h6>
                          <span className="fs-12">martniwr@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>12 Apr 2024, 05:48 PM</td>
                    <td>$147</td>
                    <td>$32</td>
                    <td>12 Apr 2024, 05:48 PM</td>
                    <td>
                      <span className="badge badge-soft-danger">Overdue</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-6244</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-02.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Linda Ray</a>
                          </h6>
                          <span className="fs-12">ray456@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>20 Apr 2024, 06:11 PM</td>
                    <td>$654</td>
                    <td>$140</td>
                    <td>20 Apr 2024, 06:11 PM</td>
                    <td>
                      <span className="badge badge-soft-warning">Draft</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-9565</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-06.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Elliot Murray</a>
                          </h6>
                          <span className="fs-12">murray@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>14 Jan 2024, 04:27 AM </td>
                    <td>$300</td>
                    <td>$0</td>
                    <td>14 Jan 2024, 04:27 AM</td>
                    <td>
                      <span className="badge badge-soft-success">Paid</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-6874</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-07.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Rebecca Smtih</a>
                          </h6>
                          <span className="fs-12">smtih@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>02 Sep 2024, 09:21 PM</td>
                    <td>$654</td>
                    <td>$65</td>
                    <td>02 Sep 2024, 09:21 PM</td>
                    <td>
                      <span className="badge badge-soft-success">Paid</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-1454</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-08.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Anthony Lewis</a>
                          </h6>
                          <span className="fs-12">anthony@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>14 Jan 2024, 04:27 AM </td>
                    <td>$300</td>
                    <td>$0</td>
                    <td>14 Jan 2024, 04:27 AM</td>
                    <td>
                      <span className="badge badge-soft-warning">Draft</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-6587</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-09.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Connie Waters</a>
                          </h6>
                          <span className="fs-12">connie@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>15 Nov 2024, 12:44 PM</td>
                    <td>$987</td>
                    <td>$47</td>
                    <td>15 Nov 2024, 12:44 PM</td>
                    <td>
                      <span className="badge badge-soft-primary">Pending</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="set-star rating-select">
                        <i className="ti ti-star-filled fs-16" />
                      </div>
                    </td>
                    <td>
                      <a href="invoice-details.html">INV-5879</a>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            src="/assets/img/users/user-10.jpg"
                            className="rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div>
                          <h6 className="fw-medium mb-0 fs-14">
                            <a href="invoice-details.html">Lori Broaddus</a>
                          </h6>
                          <span className="fs-12">broaddus@example.com</span>
                        </div>
                      </div>
                    </td>
                    <td>10 Dec 2024, 11:23 PM</td>
                    <td>$365</td>
                    <td>$21</td>
                    <td>10 Dec 2024, 11:23 PM</td>
                    <td>
                      <span className="badge badge-soft-danger">Overdue</span>
                    </td>
                    <td>
                      <div className="d-inline-flex align-items-center">
                        <a
                          href="invoice-details.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-eye" />
                        </a>
                        <a
                          href="edit-invoices.html"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                        >
                          <i className="ti ti-edit" />
                        </a>
                        <a
                          href="#delete_modal"
                          className="btn btn-icon btn-sm btn-outline-white border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* Start Modal  */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <div className="mb-3">
            <span className="avatar bg-danger">
              <i className="ti ti-trash fs-24" />
            </span>
          </div>
          <h6 className="mb-1">Delete Confirmation</h6>
          <p className="mb-3">Are you sure want to delete?</p>
          <div className="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </a>
            <a href="invoice.html" className="btn btn-danger">
              Yes, Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Modal  */}
</>

  )
}
