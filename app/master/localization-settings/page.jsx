import React from 'react'

export default function localizationSettings() {
  return (
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
          <a href="company-settings.html" className="nav-link p-2 active">
            <i className="ti ti-world-cog me-2" />
            Website Settings
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="invoice-settings.html" className="nav-link p-2">
            <i className="ti ti-apps me-2" />
            App Settings
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="email-settings.html" className="nav-link p-2">
            <i className="ti ti-device-laptop me-2" />
            System Settings
          </a>
        </li>
        <li className="nav-item me-3">
          <a href="payment-gateways.html" className="nav-link p-2">
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
  {/* start row */}
  <div className="row">
    <div className="col-xl-3 col-lg-12 theiaStickySidebar">
      <div className="card mb-3 mb-xl-0">
        <div className="card-body">
          <div className="settings-sidebar">
            <h5 className="mb-3 fs-17">Website Settings</h5>
            <div className="list-group list-group-flush settings-sidebar">
              <a href="company-settings.html" className="d-block p-2 fw-medium">
                Company Settings
              </a>
              <a
                href="localization-settings.html"
                className="d-block p-2 fw-medium active"
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
                className="d-block p-2 fw-medium"
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
      {/* Prefixes */}
      <div className="card mb-0">
        <div className="card-body">
          <div className="border-bottom mb-3 pb-3">
            <h5 className="mb-0 fs-17">Localization</h5>
          </div>
          <form action="localization-settings.html">
            <div className="mb-3">
              <h6 className="mb-1">Basic Information</h6>
              <p className="mb-0">Provide the basic information below</p>
            </div>
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Language</h6>
                    <p className="fs-13 mb-0">Select Language of the website</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">English</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Language Switcher
                    </h6>
                    <p className="fs-13 mb-0">To display in all the pages</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className="form-check form-switch ms-0 ps-0">
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
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Timezone</h6>
                    <p className="fs-13 mb-0">
                      Select date format to display in website
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">UTC 4:30</option>
                      <option>(UTC+11:00) INR</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Date Format</h6>
                    <p className="fs-13 mb-0">Select Language of the website</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">01 Jan 2025</option>
                      <option>01-Jan-2025</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Time Format</h6>
                    <p className="fs-13 mb-0">
                      Select time format to display in website
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">12 Hours</option>
                      <option>24 Hours</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Financial Year</h6>
                    <p className="fs-13 mb-0">Select year for finance</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">2025</option>
                      <option>2024</option>
                      <option>2022</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Starting Month</h6>
                    <p className="fs-13 mb-0">
                      Select starting month to display
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="mb-1">Currency Settings</h6>
              <p>Provide the currency information below</p>
            </div>
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Currency</h6>
                    <p className="fs-13 mb-0">Select currency</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">USD</option>
                      <option>Dollar</option>
                      <option>Euro</option>
                      <option>Pound</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Currency Symbol</h6>
                    <p className="fs-13 mb-0">Select currency symbol</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">$</option>
                      <option>€</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Currency Position
                    </h6>
                    <p className="fs-13 mb-0">Select currency position</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">$100</option>
                      <option>100$</option>
                      <option>$ 100</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Decimal Seperator
                    </h6>
                    <p className="fs-13 mb-0">Select decimal seperator</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">.</option>
                      <option>,</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Thousand Seperator
                    </h6>
                    <p className="fs-13 mb-0">Select thousand seperator</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">,</option>
                      <option>.</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="mb-1">Country Settings</h6>
              <p className="mb-0">Provide the country information below</p>
            </div>
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">
                      Countries Restriction
                    </h6>
                    <p className="mb-0">Select restricted countries</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <select className="select">
                      <option selected="">Allow All Countries</option>
                      <option>Deny All Countries</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="mb-1">File Settings</h6>
              <p className="mb-0">Provide the files information below</p>
            </div>
            <div className="border-bottom mb-3 border-0">
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Allowed Files</h6>
                    <p className="fs-13 mb-0">Select allowed files</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="choices-text-remove-button"
                      data-choices=""
                      data-choices-removeitem=""
                      type="text"
                      defaultValue="JPG, PNG, GIF"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="mb-3">
                    <h6 className="fs-14 fw-semibold mb-1">Max File Size</h6>
                    <p className="fs-13 mb-0">Select size of the files</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="5000MB"
                    />
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
        </div>
      </div>
      {/* /Prefixes */}
    </div>
  </div>
</div>

  )
}
