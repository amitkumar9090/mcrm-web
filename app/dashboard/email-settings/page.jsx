import Link from 'next/link'
import React from 'react'

export default function emailSettings() {
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
            <Link href="/dashboard/email-settings" className="nav-link p-2 active">
              <i className="ti ti-device-laptop me-2" />
              System Settings
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link href="/dashboard/payment-gateway" className="nav-link p-2">
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
                <Link
                  href="/dashboard/email-settings"
                  className="d-block p-2 fw-medium active"
                >
                  Email Settings
                </Link>
                <Link href="/dashboard/sms-gateways" className="d-block p-2 fw-medium">
                  SMS Gateways
                </Link>
                <Link href="/dashboard/gdpr-cookies" className="d-block p-2 fw-medium">
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
            <div className="border-bottom mb-3 pb-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h5 className="mb-0 fs-17">Email Settings</h5>
              <a
                href="javascript:void(0)"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#add_mail"
              >
                <i className="ti ti-send me-1" />
                Send Test Mail
              </a>
            </div>
            <div className="row">
              {/* Email Wrap */}
              <div className="col-md-12">
                {/* PHP Mailer */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg border me-2 flex-shrink-0">
                          <img
                            src="/assets/img/icons/mail-01.svg"
                            className="w-auto h-auto rounded-0"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium mb-1">PHP Mailer</h6>
                          <a
                            href="javascript:void(0);"
                            className="badge badge-soft-success"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#php-mail"
                            className="border-end fs-18 pe-3 me-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_phpmail"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
                        <div className="form-check form-switch ps-0">
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
                  <div className="collapse" id="php-mail">
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        PHPMailer is a third-party PHP library that provides a
                        simple way to send emails in PHP. It offers a range of
                        features that make it a popular alternative to PHP's
                        built-in mail() function, such as support for HTML
                        emails, attachments, and SMTP authentication.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /PHP Mailer */}
                {/* SMTP */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg border me-2 flex-shrink-0">
                          <img
                            src="/assets/img/icons/mail-02.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium mb-1">SMTP</h6>
                          <a
                            href="javascript:void(0);"
                            className="badge badge-soft-success"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="border-end fs-18 pe-3 me-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_smtp"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
                        <div className="form-check form-switch ps-0">
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
                </div>
                {/* /SMTP */}
                {/* SendGrid */}
                <div className="border rounded shadow p-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg border me-2 flex-shrink-0">
                          <img
                            src="/assets/img/icons/mail-03.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium mb-1">SendGrid</h6>
                          <a
                            href="javascript:void(0);"
                            className="badge badge-soft-light text-body"
                          >
                            Not Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <a
                            href="javascript:void(0);"
                            className="border-end fs-18 pe-3 me-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </a>
                          <a href="#" className="btn btn-light">
                            <i className="ti ti-plug-connected me-1" />
                            Connect
                          </a>
                        </div>
                        <div className="form-check form-switch ps-0">
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
                </div>
                {/* /SendGrid */}
              </div>
              {/* /Email Wrap */}
            </div>
          </div>
        </div>
        {/* /Settings Info */}
      </div>
    </div>
  </div>
  {/* PHP Mailer */}
  <div className="modal fade" id="add_phpmail" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">PHP Mailer</h5>
          <button
            className="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form action="email-settings">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email Password <span className="text-danger">*</span>
              </label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                From Email Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center justify-content-end m-0">
              <a
                href="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /PHP Mailer */}
  {/* SMTP */}
  <div className="modal fade" id="add_smtp" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">SMTP</h5>
          <button
            className="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form action="email-settings">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Email Password <span className="text-danger">*</span>
              </label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                From Host <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center justify-content-end m-0">
              <a
                href="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /SMTP */}
  {/* Test Mail */}
  <div className="modal fade" id="add_mail" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Test Mail</h5>
          <button
            className="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form action="email-settings">
          <div className="modal-body">
            <div className="mb-0">
              <label className="form-label">
                Enter Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center justify-content-end m-0">
              <a
                href="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </a>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Test Mail */}
</>

  )
}
