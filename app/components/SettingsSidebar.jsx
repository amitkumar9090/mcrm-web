import React from "react";
import Link from "next/link";
export default function SettingsSidebar() {
 
  return (
    <div className="row">
      <div className="col-xl-3 col-lg-12 theiaStickySidebar">
        <div className="card">
          <div className="card-body">
            <div className="settings-sidebar">
              <h5 className="mb-3 fs-17">Website Settings</h5>
              <div className="list-group list-group-flush settings-sidebar">
                <a
                  href="company-settings.html"
                  className="d-block p-2 fw-medium"
                >

                  Company Settings
                </a>
                <a
                  href="localization-settings.html"
                  className="d-block p-2 fw-medium"
                >
                  Localization
                </a>
                <a
                  href="prefixes-settings.html"
                  className="d-block p-2 fw-medium"
                >
                  Prefixes
                </a>
                <a
                  href="preference-settings.html"
                  className="d-block p-2 fw-medium"
                >
                  Preference
                </a>
                <a
                  href="appearance-settings.html"
                  className="d-block p-2 fw-medium"
                >
                  Appearance
                </a>
                <a
                  href="language-settings.html"
                  className="d-block p-2 fw-medium active"
                >
                  Language
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end card body */}
        </div>{" "}
        {/* end card */}
      </div>{" "}
      {/* end col */}
      <div className="col-xl-9 col-lg-12">
        {/* Custom Fields */}
        <div className="card">
          <div className="card-body">
            <div className="border-bottom mb-3 pb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h4 className="fs-17 mb-0">Language</h4>
              <div className="d-flex align-items-center gap-2">
                <div className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle btn btn-outline-light px-2 shadow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-language me-2" />
                    Language
                  </a>
                  <div className="dropdown-menu  dropdown-menu-end">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <img
                            src="/assets/img/flags/us.svg"
                            alt="Img"
                            height={16}
                          />
                          English
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <img
                            src="/assets/img/flags/de.svg"
                            alt="Img"
                            height={16}
                          />
                          German
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <img
                            src="/assets/img/flags/ae.svg"
                            alt="Img"
                            height={16}
                          />
                          Arabic
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item d-flex align-items-center gap-2"
                        >
                          <img
                            src="/assets/img/flags/fr.svg"
                            alt="Img"
                            height={16}
                          />
                          French
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add_lang"
                >
                  <i className="ti ti-square-rounded-plus-filled me-1" />
                  Add Language
                </a>
              </div>
            </div>
            {/* Contact List */}
            <div className="table-responsive custom-table mb-4">
              <table className="table table-nowrap">
                <thead className="table-light">
                  <tr>
                    <th>Language</th>
                    <th>Code</th>
                    <th>RTL</th>
                    <th>Total</th>
                    <th>Done</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <img
                          src="/assets/img/flags/us.svg"
                          alt="Img"
                          height={16}
                        />
                        English
                      </a>
                    </td>
                    <td>en</td>
                    <td>
                      <div className="form-check form-switch p-0">
                        <label className="form-check-label d-flex align-items-center gap-2 w-100">
                          <input
                            className="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            defaultChecked=""
                          />
                        </label>
                      </div>
                    </td>
                    <td>3481</td>
                    <td>2861</td>
                    <td>
                      <div className="pipeline-progress d-flex align-items-center w-100">
                        <div
                          className="progress w-100 bg-light"
                          style={{ height: 5, borderRadius: 10 }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "80%", borderRadius: 10 }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ms-2 text-body">80%</span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-success"
                      >
                        Connected
                      </a>
                    </td>
                    <td className="d-flex align-items-center gap-2">
                      <a
                        href="language-web.html"
                        className="badge bg-light text-dark me-2"
                      >
                        Web
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        App
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        Admin
                      </a>
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
                            data-bs-target="#edit_lang"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_lang"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <img
                          src="/assets/img/flags/de.svg"
                          alt="Img"
                          height={16}
                        />
                        German
                      </a>
                    </td>
                    <td>de</td>
                    <td>
                      <div className="form-check form-switch p-0">
                        <label className="form-check-label d-flex align-items-center gap-2 w-100">
                          <input
                            className="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            defaultChecked=""
                          />
                        </label>
                      </div>
                    </td>
                    <td>4815</td>
                    <td>4815</td>
                    <td>
                      <div className="pipeline-progress d-flex align-items-center w-100">
                        <div
                          className="progress w-100 bg-light"
                          style={{ height: 5, borderRadius: 10 }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "100%", borderRadius: 10 }}
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ms-2 text-body">100%</span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-success"
                      >
                        Connected
                      </a>
                    </td>
                    <td className="d-flex align-items-center gap-2">
                      <a
                        href="language-web.html"
                        className="badge bg-light text-dark me-2"
                      >
                        Web
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        App
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        Admin
                      </a>
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
                            data-bs-target="#edit_lang"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_lang"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <img
                          src="/assets/img/flags/ae.svg"
                          alt="Img"
                          height={16}
                        />
                        Arabic
                      </a>
                    </td>
                    <td>ar</td>
                    <td>
                      <div className="form-check form-switch p-0">
                        <label className="form-check-label d-flex align-items-center gap-2 w-100">
                          <input
                            className="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            defaultChecked=""
                          />
                        </label>
                      </div>
                    </td>
                    <td>2590</td>
                    <td>20</td>
                    <td>
                      <div className="pipeline-progress d-flex align-items-center w-100">
                        <div
                          className="progress w-100 bg-light"
                          style={{ height: 5, borderRadius: 10 }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "50%", borderRadius: 10 }}
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ms-2 text-body">50%</span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-success"
                      >
                        Connected
                      </a>
                    </td>
                    <td className="d-flex align-items-center gap-2">
                      <a
                        href="language-web.html"
                        className="badge bg-light text-dark me-2"
                      >
                        Web
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        App
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        Admin
                      </a>
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
                            data-bs-target="#edit_lang"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_lang"
                          >
                            <i className="ti ti-trash text-blue me-1" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="d-flex align-items-center gap-2"
                      >
                        <img
                          src="/assets/img/flags/fr.svg"
                          alt="Img"
                          height={16}
                        />
                        English
                      </a>
                    </td>
                    <td>fr</td>
                    <td>
                      <div className="form-check form-switch p-0">
                        <label className="form-check-label d-flex align-items-center gap-2 w-100">
                          <input
                            className="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            defaultChecked=""
                          />
                        </label>
                      </div>
                    </td>
                    <td>1892</td>
                    <td>387</td>
                    <td>
                      <div className="pipeline-progress d-flex align-items-center w-100">
                        <div
                          className="progress w-100 bg-light"
                          style={{ height: 5, borderRadius: 10 }}
                        >
                          <div
                            className="progress-bar bg-purple"
                            role="progressbar"
                            style={{ width: "40%", borderRadius: 10 }}
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="ms-2 text-body">40%</span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-success"
                      >
                        Connected
                      </a>
                    </td>
                    <td className="d-flex align-items-center gap-2">
                      <a
                        href="language-web.html"
                        className="badge bg-light text-dark me-2"
                      >
                        Web
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        App
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="badge bg-light text-dark me-2"
                      >
                        Admin
                      </a>
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
                            data-bs-target="#edit_lang"
                          >
                            <i className="ti ti-edit text-blue me-1" />
                            Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_lang"
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
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="datatable-length" />
              </div>
              <div className="col-md-6">
                <div className="datatable-paginate" />
              </div>
            </div>
            {/* /Contact List */}
          </div>
        </div>
        {/* /Custom Fields */}
      </div>
    </div>
  );
}
