import React from 'react'
import Link from 'next/link'

export default function SettingsHeader() {
  return (
  <div className="card border-0">
    <div className="card-body pb-0 pt-0 px-2">
      <ul className="nav nav-tabs nav-bordered nav-bordered-primary">
        <li className="nav-item me-3">
          <Link href="/dashboard/profile-settings" className="nav-link p-2 active">
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
  </div>
  )
}
