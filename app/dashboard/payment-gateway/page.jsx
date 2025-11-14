import Link from 'next/link'
import React from 'react'

export default function paymentGateway() {
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
    {/* Settings Menu */}
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
            <Link href="/dashboard/email-settings" className="nav-link p-2">
              <i className="ti ti-device-laptop me-2" />
              System Settings
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link href="/dashboard/payment-gateways" className="nav-link p-2 active">
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
    {/* /Settings Menu */}
    <div className="row">
      <div className="col-xl-3 col-lg-12 theiaStickySidebar">
        {/* Settings Sidebar */}
        <div className="card">
          <div className="card-body">
            <div className="settings-sidebar">
              <h4 className="fw-bold mb-3 fs-17">Financial Settings</h4>
              <div className="list-group list-group-flush settings-sidebar">
                <Link
                 href=" /dashboard/payment-gateways"
                  className="d-block p-2 fw-medium active"
                >
                  Payment Gateways
                </Link>
                <Link href="/dashboard/bank-accounts" className="d-block p-2 fw-medium">
                  Bank Accounts
                </Link>
                <Link href="/dashboard/tax-rates" className="d-block p-2 fw-medium">
                  Tax Rates
                </Link>
                <Link href="/dashboard/currencies" className="d-block p-2 fw-medium">
                  Currencies
                </Link>
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
              <h4 className="fs-17 mb-0">Payment Gateways</h4>
            </div>
            <div className="row">
              {/* Email Wrap */}
              <div className="col-md-12">
                {/* Payment */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-1.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#php-mail"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_paypal"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="php-mail">
                    <div>
                      <p className="mb-0">
                        PayPal Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment */}
                {/* Payment-2 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-2.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#stripe-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_stripe"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="collapse pt-3 mt-3 border-top"
                    id="stripe-pay"
                  >
                    <div>
                      <p className="mb-0">
                        Stripe Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-2 */}
                {/* Payment-3 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-3.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#brain-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_brain"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="brain-pay">
                    <div>
                      <p className="mb-0">
                        Braintree Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-3 */}
                {/* Payment-4 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-4.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#skrill-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_skrill"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="collapse pt-3 mt-3 border-top"
                    id="skrill-pay"
                  >
                    <div>
                      <p className="mb-0">
                        Skrill Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-4 */}
                {/* Payment-5 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-5.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#razor-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_razor"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="razor-pay">
                    <div>
                      <p className="mb-0">
                        Razorpay Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-5 */}
                {/* Payment-6 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-6.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#payoneer-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_payoneer"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div
                    className="collapse pt-3 mt-3 border-top"
                    id="payoneer-pay"
                  >
                    <div>
                      <p className="mb-0">
                        Payoneer Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-6 */}
                {/* Payment-7 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-7.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#pay-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_pay"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="pay-pay">
                    <div>
                      <p className="mb-0">
                        Pay Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-7 */}
                {/* Payment-8 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-8.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#paytm-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_paytm"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="paytm-pay">
                    <div>
                      <p className="mb-0">
                        Paytm Holdings, Inc. is an American multinational
                        financial technology company operating an online
                        payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-8 */}
                {/* Payment-9 */}
                <div className="border rounded shadow p-3 mb-3">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-9.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#bank-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_bank"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="bank-pay">
                    <div>
                      <p className="mb-0">
                        Bank Transfer Holdings, Inc. is an American
                        multinational financial technology company operating an
                        online payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-9 */}
                {/* Payment-10 */}
                <div className="border rounded shadow p-3 mb-0">
                  <div className="row gy-3">
                    <div className="col-sm-5">
                      <div className="d-flex align-items-center">
                        <span>
                          <img
                            src="/assets/img/payments/payment-10.svg"
                            alt="Img"
                          />
                        </span>
                        <div className="ms-2">
                          <a
                            href="javascript:void(0);"
                            className="badge badge-tag badge-soft-success ms-2"
                          >
                            Connected
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="collapse"
                            data-bs-target="#cash-pay"
                            className="text-default me-1 me-lg-3 me-md-3 me-sm-3 border-end pe-1 pe-lg-3 pe-md-3 pe-sm-3 fs-16"
                          >
                            <i className="ti ti-info-circle-filled" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#add_cash"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </a>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  <div className="collapse pt-3 mt-3 border-top" id="cash-pay">
                    <div>
                      <p className="mb-0">
                        Cash on delivery Holdings, Inc. is an American
                        multinational financial technology company operating an
                        online payments system in the majority of countries that
                        support online money transfers, and serves as an
                        electronic alternative to traditional paper methods such
                        as checks and money orders.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Payment-10 */}
              </div>
              {/* /Email Wrap */}
            </div>
          </div>
        </div>
        {/* /Settings Info */}
      </div>
    </div>
  </div>
  {/* Paypal */}
  <div className="modal fade" id="add_paypal" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Paypal</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Paypal */}
  {/* Stripe */}
  <div className="modal fade" id="add_stripe" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Stripe</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Stripe */}
  {/* BrainTree */}
  <div className="modal fade" id="add_brain" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">BrainTree</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /BrainTree */}
  {/* Skrill */}
  <div className="modal fade" id="add_skrill" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Skrill</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Skrill */}
  {/* Razorpay */}
  <div className="modal fade" id="add_razor" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Razorpay</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Skrill */}
  {/* Payoneer */}
  <div className="modal fade" id="add_payoneer" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Payoneer</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Payoneer */}
  {/* Pay */}
  <div className="modal fade" id="add_pay" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Pay</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Pay */}
  {/* Paytm */}
  <div className="modal fade" id="add_paytm" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Paytm</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Paytm */}
  {/* Bank Transfer */}
  <div className="modal fade" id="add_bank" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Bank Transfer</h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Bank Transfer */}
  {/* Cash on delivery */}
  <div className="modal fade" id="add_cash" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Cash On Delivery </h5>
          <button
            type="button"
            className="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form action="payment-gateways">
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                From Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                API Key <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">
                Secret Key <span className="text-danger">*</span>
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Paytm */}
</>

  )
}
