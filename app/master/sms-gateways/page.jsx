import React from "react";

export default function smsGateways() {
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
                <a href="email-settings.html" className="nav-link p-2 active">
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
                  <h5 className="mb-3 fs-17">System Settings</h5>
                  <div className="list-group list-group-flush settings-sidebar">
                    <a
                      href="email-settings.html"
                      className="d-block p-2 fw-medium"
                    >
                      Email Settings
                    </a>
                    <a
                      href="sms-gateways.html"
                      className="d-block p-2 fw-medium active"
                    >
                      SMS Gateways
                    </a>
                    <a
                      href="gdpr-cookies.html"
                      className="d-block p-2 fw-medium"
                    >
                      GDPR Cookies
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
            <div className="card mb-0">
              <div className="card-body pb-0">
                <div className="border-bottom mb-3 pb-3">
                  <h5 className="mb-0 fs-17">SMS Gateways</h5>
                </div>
                <div className="row">
                  {/* Gateway Wrap */}
                  <div className="col-xxl-4 col-sm-6">
                    <div className="border rounded d-flex align-items-center justify-content-between p-3 mb-3 shadow">
                      <div>
                        <img src="/assets/img/icons/gateway-01.svg" alt="Img" />
                      </div>
                      <div className="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#add_nexmo"
                        >
                          <i className="ti ti-settings fs-24" />
                        </a>
                        <div className="form-check form-switch ps-2">
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
                  {/* /Gateway Wrap */}
                  {/* Gateway Wrap */}
                  <div className="col-xxl-4 col-sm-6">
                    <div className="border rounded d-flex align-items-center justify-content-between p-3 mb-3 shadow">
                      <div>
                        <img src="/assets/img/icons/gateway-02.svg" alt="Img" />
                      </div>
                      <div className="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#add_factor"
                        >
                          <i className="ti ti-settings fs-24" />
                        </a>
                        <div className="form-check form-switch ps-2">
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
                  {/* /Gateway Wrap */}
                  {/* Gateway Wrap */}
                  <div className="col-xxl-4 col-sm-6">
                    <div className="border rounded d-flex align-items-center justify-content-between p-3 mb-3 shadow">
                      <div>
                        <img src="/assets/img/icons/gateway-03.svg" alt="Img" />
                      </div>
                      <div className="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#add_twilio"
                        >
                          <i className="ti ti-settings fs-24" />
                        </a>
                        <div className="form-check form-switch ps-2">
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
                  {/* /Gateway Wrap */}
                </div>
              </div>
            </div>
            {/* /Settings Info */}
          </div>
        </div>
      </div>
      {/* Nexmo */}
      <div className="modal custom-modal fade" id="add_nexmo" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Nexmo</h5>
              <button
                className="btn-close custom-btn-close border p-1 me-0 text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="sms-gateways.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    API Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    API Secret Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Sender ID <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-end gap-2">
                <a href="#" className="btn btn-light" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Nexmo */}
      {/* Add 2Factor */}
      <div className="modal custom-modal fade" id="add_factor" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-end">
              <h5 className="modal-title">2Factor</h5>
              <button
                className="btn-close custom-btn-close border p-1 me-0 text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="sms-gateways.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    API Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    API Secret Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Sender ID <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-end gap-2">
                <a href="#" className="btn btn-light" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add 2Factor */}
      {/* Add Twilio */}
      <div className="modal custom-modal fade" id="add_twilio" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Twilio</h5>
              <button
                className="btn-close custom-btn-close border p-1 me-0 text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="sms-gateways.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    API Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    API Secret Key <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Sender ID <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-end gap-2">
                <a href="#" className="btn btn-light" data-bs-dismiss="modal">
                  Cancel
                </a>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Twilio */}
    </>
  );
}
