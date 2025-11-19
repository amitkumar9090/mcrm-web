import React from 'react'
import SettingsHeader from '../../components/SettingsHeader'
import SettingsSidebar from '../../components/SettingsSidebar'

export default function languageSettings() {
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

    <SettingsHeader />
   {" "}
    {/* end card */}
    {/* start row */}
    <SettingsSidebar />
  </div>
  {/* Add Translation */}
  <div className="modal fade" id="add_lang" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Translation</h5>
          <button
            className="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="language-settings.html">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Language <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Code <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">Status</label>
              <div className="radio-wrap">
                <div className="d-flex flex-wrap">
                  <div className="radio-btn">
                    <input
                      type="radio"
                      className="status-radio"
                      id="add-active"
                      name="status"
                      defaultChecked=""
                    />
                    <label htmlFor="add-active">Active</label>
                  </div>
                  <div className="radio-btn">
                    <input
                      type="radio"
                      className="status-radio"
                      id="add-inactive"
                      name="status"
                    />
                    <label htmlFor="add-inactive">Inactive</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center">
              <a
                href="#"
                className="btn btn-sm btn-light me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-sm btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Translation */}
  {/* Edit Translation */}
  <div className="modal fade" id="edit_lang" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Translation</h5>
          <button
            className="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form action="language-settings.html">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Language <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="English"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Code <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" defaultValue="en" />
            </div>
            <div className="mb-0">
              <label className="form-label">Status</label>
              <div className="radio-wrap">
                <div className="d-flex flex-wrap">
                  <div className="radio-btn">
                    <input
                      type="radio"
                      className="status-radio"
                      id="edit-active"
                      name="status"
                      defaultChecked=""
                    />
                    <label htmlFor="edit-active">Active</label>
                  </div>
                  <div className="radio-btn">
                    <input
                      type="radio"
                      className="status-radio"
                      id="edit-inactive"
                      name="status"
                    />
                    <label htmlFor="edit-inactive">Inactive</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center">
              <a
                href="#"
                className="btn btn-sm btn-light me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-sm btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Translation */}
  {/* delete modal */}
  <div className="modal fade" id="delete_lang">
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

  )
}
