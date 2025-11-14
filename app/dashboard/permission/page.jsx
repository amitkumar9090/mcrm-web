import React from 'react'

export default function Permission() {
  const permissionsData = [
    {
      id: 1,
      module: "Dashboard",
      sub_module: "Dashboard"
    },
    {
      id: 2,
      module: "Contacts",
      sub_module: "Contacts"
    },
    {
      id: 3,
      module: "Companies",
      sub_module: "Companies"
    },
    {
      id: 4,
      module: "Leads",
      sub_module: "Leads"
    },
    {
      id: 5,
      module: "Deals",
      sub_module: "Deals"
    },
    {
      id: 6,
      module: "Pipelines",
      sub_module: "Pipelines"
    },
    {
      id: 7,
      module: "Compaign",
      sub_module: "Compaign"
    },
    {
      id: 8,
      module: "Projects",
      sub_module: "Projects"
    },
    {
      id: 9,
      module: "Tasks",
      sub_module: "Tasks"
    },
    {
      id: 10,
      module: "Activity",
      sub_module: "Activity"
    }
  ];

  return (
    <div className="content pb-0">
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
        <div>
          <h4 className="mb-1">
            Permission<span className="badge badge-soft-primary ms-2">152</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Permission
              </li>
            </ol>
          </nav>
        </div>
        <div className="gap-2 d-flex align-items-center flex-wrap">
          <div className="dropdown">
            <a
              href="javascript:void(0);"
              className="dropdown-toggle btn btn-outline-light px-2 shadow"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-package-export me-2" />
              Export
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <ul>
                <li>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-file-type-pdf me-1" />
                    Export as PDF
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ti ti-file-type-xls me-1" />
                    Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
      
      {/* card start */}
      <div className="card border-0 rounded-0">
        <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <h6 className="mb-0">
            Role Name : <span className="text-danger">Admin</span>
          </h6>
          <div className="form-check mb-1">
            <input type="checkbox" className="form-check-input" id="select-all-2" />
            <label className="form-check-label" htmlFor="select-all-2">
              Allow All Modules
            </label>
          </div>
        </div>
        <div className="card-body">
          {/* Contact List */}
          <div className="table-responsive custom-table">
            <table className="table table-nowrap" id="permission_list">
              <thead className="table-light">
                <tr>
                  <th className="no-sort">
                    <div className="form-check form-check-md">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="select-all"
                      />
                    </div>
                  </th>
                  <th>Modules</th>
                  <th>Sub Modules</th>
                  <th>Create</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Delete</th>
                  <th>Allow All</th>
                </tr>
              </thead>
              <tbody>
                {permissionsData.map((permission) => (
                  <tr key={permission.id}>
                    <td>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>{permission.module}</td>
                    <td>{permission.sub_module}</td>
                    <td>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
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
      {/* card end */}
    </div>
  )
}