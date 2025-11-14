import React from "react";
import Link from "next/link";

export default function GeneralSettingsSidebar() {
  return (
    <div className="settings-sidebar">
      <h5 className="mb-3 fs-17">General Settings</h5>
      <div className="list-group list-group-flush settings-sidebar">
        <Link
          href="/dashboard/profile-settings"
          className="d-block p-2 fw-medium"
        >
          Profile
        </Link>

        <Link
          href="/dashboard/security-settings"
          className="d-block p-2 fw-medium "
        >
          Security
        </Link>
        <Link
          href="/dashboard/notifications-settings"
          className="d-block p-2 fw-medium active"
        >
          Notifications
        </Link>
      </div>
    </div>
  );
}
