import React from 'react'
import Link from 'next/link'

export default function gdprCookies() {
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
          <Link href="/dashboard/invoice-settings" className="nav-link p-2">
            <i className="ti ti-apps me-2" />
            App Settings
          </Link>
        </li>
        <li className="nav-item me-3">
          <Link href="/dashboard/email-settings" className="nav-link p-2 active">
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
      <div className="card mb-3 mb-xl-0">
        <div className="card-body">
          <div className="settings-sidebar">
            <h5 className="mb-3 fs-17">System Settings</h5>
            <div className="list-group list-group-flush settings-sidebar">
              <Link href="/dashboard/email-settings" className="d-block p-2 fw-medium">
                Email Settings
              </Link>
              <Link href="/dashboard/sms-gateways" className="d-block p-2 fw-medium">
                SMS Gateways
              </Link>
              <Link
               href="/dashboard/ gdpr-cookies"
                className="d-block p-2 fw-medium active"
              >
                GDPR Cookies
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
            <h5 className="mb-0 fs-17">GDPR Cookies</h5>
          </div>
          <form action="gdpr-cookies">
            <div className="border-bottom mb-3">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Cookies Content Text
                    </h6>
                    <p className="fs-13">You can configure the text here</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="snow-editor" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Cookies Position</h6>
                    <p className="fs-13">You can configure the type</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">Right</option>
                      <option>Left</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Agree Button Text
                    </h6>
                    <p className="fs-13">You can configure the text here</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Agree"
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Decline Button Text
                    </h6>
                    <p className="fs-13">You can configure the text here</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Decline"
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Show Decline Button
                    </h6>
                    <p className="fs-13">To display decline button</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className="form-check form-switch ms-0 ps-0">
                      <input
                        className="form-check-input ms-0 mt-0"
                        type="checkbox"
                        role="switch"
                        defaultChecked=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Link for Cookies Page
                    </h6>
                    <p className="fs-13">You can configure the link here</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end flex-wrap gap-2">
              <a href="#" className="btn btn-sm btn-light me-2">
                Cancel
              </a>
              <button type="submit" className="btn btn-sm btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /GDPR Cookies */}
    </div>
  </div>
</div>
  )
}
