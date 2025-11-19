import React from 'react'
import Link from 'next/link'

export default function preferenceSettings() {
  return (
    <div className="content">
  {/* Page Header */}
  <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
    <div>
      <h4 className="mb-1">Settings</h4>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item">
            <Link href="index">Home</Link>
        </li>
          <li className="breadcrumb-item active" aria-current="page">
            Settings
          </li>
        </ol>
      </nav>
    </div>
    <div className="gap-2 d-flex align-items-center flex-wrap">
      <a
        href="javascri /dashboard/pt:void(0);"
        className="btn btn-icon btn-outline-light shadow"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        aria-label="Refresh"
        data-bs-original-title="Refresh"
      >
        <i className="ti ti-refresh" />
      </a>
      <a
        href="javascri /dashboard/pt:void(0);"
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
          <Link href=" /dashboard/invoice-settings" className="nav-link p-2">
            <i className="ti ti-apps me-2" />
            App Settings
          </Link>
        </li>
        <li className="nav-item me-3">
          <Link href=" /dashboard/email-settings" className="nav-link p-2">
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
          <Link href="/dashboard/sitemap" classNa me="nav-link p-2">
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
              <Link href="company-settings /dashboard/" className="d-block p-2 fw-medium">
                Company Settings
              </Link>
              <Link
                href=" /dashboard/localization-settings"
                className="d-block p-2 fw-medium"
              >
                Localization
              </Link>
              <Link
                href=" /dashboard/prefixes-settings"
                className="d-block p-2 fw-medium"
              >
                Prefixes
              </Link>
              <Link
                href=" /dashboard/preference-settings"
                className="d-block p-2 fw-medium active"
              >
                Preference
              </Link>
              <Link
                href=" /dashboard/appearance-settings"
                className="d-block p-2 fw-medium"
              >
                Appearance
              </Link>
              <Link
                href=" /dashboard/language-settings"
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
      <div className="card mb-0">
        <div className="card-body">
          <div className="border-bottom mb-3 pb-3">
            <h5 className="mb-0 fs-17">Preference</h5>
          </div>
          <form action="preference-settings">
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-01.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">Contact</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-02.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">Deals</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-03.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">Leads</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-04.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">
                          Pipelines
                        </h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-02.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">
                          Campaign
                        </h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-06.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">
                          Projects
                        </h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-07.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">Tasks</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-08.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">
                          Acivities
                        </h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-09.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">Company</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-10.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">
                          Analytics
                        </h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-11.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">Clients</h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-sm-6">
                  <div className="card border mb-3">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/img/icons/preference-12.svg"
                          alt="Img"
                        />
                        <h6 className="fs-14 fw-semibold ms-2 mb-0">
                          Customers
                        </h6>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input ms-0"
                          type="checkbox"
                          role="switch"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
