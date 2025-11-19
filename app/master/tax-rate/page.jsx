import React from 'react'

export default function taxRate() {
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
              <a href="index.html">Home</a>
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
            <a href="profile-settings.html" className="nav-link p-2">
              <i className="ti ti-settings-cog me-2" />
              General Settings
            </a>
          </li>
          <li className="nav-item me-3">
            <a href="company-settings.html" className="nav-link p-2">
              <i className="ti ti-world-cog me-2" />
              Website Settings
            </a>
          </li>
          <li className="nav-item me-3">
            <a href="email-settings.html" className="nav-link p-2">
              <i className="ti ti-device-laptop me-2" />
              System Settings
            </a>
          </li>
          <li className="nav-item me-3">
            <a href="payment-gateways.html" className="nav-link p-2 active">
              <i className="ti ti-moneybag me-2" />
              Financial Settings
            </a>
          </li>
          <li className="nav-item">
            <a href="sitemap.html" className="nav-link p-2">
              <i className="ti ti-flag-cog me-2" />
              Other Settings
            </a>
          </li>
        </ul>
      </div>{" "}
      {/* end card body */}
    </div>{" "}
    {/* end card */}
    {/* /Settings Menu */}
    {/* start row */}
    <div className="row">
      <div className="col-xl-3 col-lg-12 theiaStickySidebar">
        {/* Settings Sidebar */}
        <div className="card">
          <div className="card-body">
            <div className="settings-sidebar">
              <h4 className="fs-17 mb-3">Financial Settings</h4>
              <div className="list-group list-group-flush settings-sidebar">
                <a
                  href="payment-gateways.html"
                  className="d-block p-2 fw-medium"
                >
                  Payment Gateways
                </a>
                <a href="bank-accounts.html" className="d-block p-2 fw-medium">
                  Bank Accounts
                </a>
                <a
                  href="tax-rates.html"
                  className="d-block p-2 fw-medium active"
                >
                  Tax Rates
                </a>
                <a href="currencies.html" className="d-block p-2 fw-medium">
                  Currencies
                </a>
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
              <h4 className="fs-17 mb-0">Tax Rate</h4>
              <a
                href="javascript:void(0)"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#add_tax"
              >
                <i className="ti ti-square-rounded-plus-filled me-1" />
                Add New Tax Rate
              </a>
            </div>
            {/* Start Table */}
            <div className="table-responsive custom-table mb-4">
              <table className="table table-nowrap">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Tax Rate</th>
                    <th>Created On</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>VAT</td>
                    <td>10%</td>
                    <td>22 Feb 2025</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>
                      <div className="dropdown table-action">
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
                            data-bs-target="#edit_tax"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_tax"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>CGST</td>
                    <td>08%</td>
                    <td>17 Jan 2025</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>
                      <div className="dropdown table-action">
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
                            data-bs-target="#edit_tax"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_tax"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>SGST</td>
                    <td>10%</td>
                    <td>07 Jan 2025</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>
                      <div className="dropdown table-action">
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
                            data-bs-target="#edit_tax"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_tax"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Table */}
            <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h4 className="fs-17 mb-0">Tax Group</h4>
              <a
                href="javascript:void(0)"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#add_tax_group"
              >
                <i className="ti ti-square-rounded-plus-filled me-1" />
                Add New Group
              </a>
            </div>
            {/* Start Table */}
            <div className="table-responsive custom-table">
              <table className="table table-nowrap">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Tax Rate</th>
                    <th>Created On</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GST</td>
                    <td>18%</td>
                    <td>18 Jan 2025</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>
                      <div className="dropdown table-action">
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
                            data-bs-target="#edit_tax_group"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_tax_group"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Table */}
          </div>
        </div>
        {/* /Settings Info */}
      </div>
    </div>
    {/* end row */}
  </div>
  {/* Add Tax Rate */}
  <div className="modal fade" id="add_tax" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Tax Rate</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="tax-rates.html">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Tax Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Tax Rate(%) <span className="text-danger">*</span>
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
                Create New
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Tax Rate */}
  {/* Edit Tax Rate */}
  <div className="modal fade" id="edit_tax" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Tax Rate</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="tax-rates.html">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Tax Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" defaultValue="VAT" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Tax Rate(%) <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" defaultValue="10%" />
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
  {/* /Edit Tax Rate */}
  {/* delete modal */}
  <div className="modal fade" id="delete_tax">
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
            Are you sure you want to remove tax rate you selected.
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
  {/* Add Tax Group */}
  <div className="modal fade" id="add_tax_group" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Tax Group</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="tax-rates.html">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Tax Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Sub Taxes <span className="text-danger">*</span>
              </label>
              <input
                className="input-tags form-control border-0 h-100"
                data-choices=""
                data-choices-limit="infinite"
                data-choices-removeitem=""
                type="text"
              />
              <p className="mb-0 fs-12 mt-1">Enter value separated by comma</p>
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
                Create New
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Tax Group */}
  {/* Edit Tax Group */}
  <div className="modal fade" id="edit_tax_group" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Tax Group</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="tax-rates.html">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Tax Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" defaultValue="GST" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Sub Taxes <span className="text-danger">*</span>
              </label>
              <input
                className="input-tags form-control border-0 h-100"
                data-choices=""
                data-choices-limit="infinite"
                data-choices-removeitem=""
                type="text"
                defaultValue="CGST, SGST"
              />
              <p className="mb-0 fs-12 mt-1">Enter value separated by comma</p>
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
  {/* /Edit Tax Group */}
  {/* delete modal */}
  <div className="modal fade" id="delete_tax_group">
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
            Are you sure you want to remove rate group you selected..
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
</>

  )
}
