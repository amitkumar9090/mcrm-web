import Link from 'next/link'
import React from 'react'

export default function appearanceSettings() {
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
  <div className="card border-0">
    <div className="card-body pb-0 pt-0 px-2">
      <ul className="nav nav-tabs nav-bordered nav-bordered-primary">
        <li className="nav-item me-3">
          <Link href="profile-settings" className="nav-link p-2">
            <i className="ti ti-settings-cog me-2" />
            General Settings
          </Link>
        </li>
        <li className="nav-item me-3">
          <Link href="company-settings" className="nav-link p-2 active">
            <i className="ti ti-world-cog me-2" />
            Website Settings
          </Link>
        </li>
        <li className="nav-item me-3">
          <Link href="invoice-settings" className="nav-link p-2">
            <i className="ti ti-apps me-2" />
            App Settings
          </Link>
        </li>
        <li className="nav-item me-3">
          <Link href="email-settings" className="nav-link p-2">
            <i className="ti ti-device-laptop me-2" />
            System Settings
          </Link>
        </li>
        <li className="nav-item me-3">
          <Link href="payment-gateways" className="nav-link p-2">
            <i className="ti ti-moneybag me-2" />
            Financial Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link href="sitemap" className="nav-link p-2">
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
              <Link href="company-settings" className="d-block p-2 fw-medium">
                Company Settings
              </Link>
              <Link
                href="localization-settings"
                className="d-block p-2 fw-medium"
              >
                Localization
              </Link>
              <Link
                href="prefixes-settings"
                className="d-block p-2 fw-medium"
              >
                Prefixes
              </Link>
              <Link
                href="preference-settings"
                className="d-block p-2 fw-medium"
              >
                Preference
              </Link>
              <Link
                href="appearance-settings"
                className="d-block p-2 fw-medium active"
              >
                Appearance
              </Link>
              <Link
                href="language-settings"
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
            <h5 className="mb-0 fs-17">Appearance</h5>
          </div>
          <form action="appearance-settings">
            <div className="border-bottom mb-3">
              {/* start row */}
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Select Theme</h6>
                    <p className="fs-13 mb-0">Select theme of the website</p>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-8">
                  <div className="mb-3">
                    <div className="theme-type-images d-flex align-items-center gap-2">
                      <div className="theme-image  text-center p-2 rounded active">
                        <div className="mb-2">
                          <img src="/assets/img/theme/theme-01.jpg" alt="Img" />
                        </div>
                        <span className="fw-medium">Light</span>
                      </div>
                      <div className="theme-image text-center p-2 rounded">
                        <div className="mb-2">
                          <img src="/assets/img/theme/theme-02.jpg" alt="Img" />
                        </div>
                        <span className="fw-medium">Dark</span>
                      </div>
                      <div className="theme-image text-center p-2 rounded">
                        <div className="mb-2">
                          <img src="/assets/img/theme/theme-03.jpg" alt="Img" />
                        </div>
                        <span className="fw-medium">Automatic</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
              {/* start col */}
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Accent Color</h6>
                    <p className="fs-13 mb-0">Select accent color of website</p>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className="theme-colors">
                      <div className="d-flex align-items-center gap-2">
                        <span className="themecolorset defaultcolor active" />
                        <span className="themecolorset theme-secondary" />
                        <span className="themecolorset theme-violet" />
                        <span className="themecolorset theme-blue" />
                        <span className="themecolorset theme-brown" />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
              {/* start row */}
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Expand Sidebar</h6>
                    <p className="fs-13 mb-0">To display in all the pages</p>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked=""
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
              {/* start row */}
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Sidebar Size</h6>
                    <p className="fs-13 mb-0">
                      Select size of sidebar to display
                    </p>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">Large - 250px</option>
                      <option>Small - 85px</option>
                    </select>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
              {/* start row */}
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Font Family</h6>
                    <p className="fs-13 mb-0">Select font family of website</p>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">Noto Sans</option>
                      <option>Nunito</option>
                    </select>
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
