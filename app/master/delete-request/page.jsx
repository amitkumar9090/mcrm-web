'use client';

import React, { useState, useMemo } from 'react';
import './delete-request.css';

export default function DeleteRequest() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  // Static data from your jQuery code
  const initialData = [
    {
      id: 1,
      si_no: '',
      select: '',
      customer_name: 'Darlee Robertson',
      customer_image: '/assets/img/profiles/avatar-19.jpg',
      customer_no: 'Facility Manager',
      created: '25 Sep 2025, 12:12 pm',
      delete_request: '25 Sep 2025, 12:12 pm',
      reason: 'No longer using service',
      status: '0',
      Action: ''
    },
    {
      id: 2,
      si_no: '',
      select: '',
      customer_name: 'Sharon Roy',
      customer_image: '/assets/img/profiles/avatar-20.jpg',
      customer_no: 'Installer',
      created: '27 Sep 2025, 07:40 am',
      delete_request: '27 Sep 2025, 07:40 am',
      reason: 'Privacy concerns',
      status: '1',
      Action: ''
    }
  ];

  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [starredRows, setStarredRows] = useState(new Set());
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [rejectReason, setRejectReason] = useState('');

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customer_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.created.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.delete_request.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    return sortedData.slice(startIndex, startIndex + entriesPerPage);
  }, [sortedData, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(sortedData.length / entriesPerPage);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleToggleStar = (id) => {
    const newStarred = new Set(starredRows);
    if (newStarred.has(id)) {
      newStarred.delete(id);
    } else {
      newStarred.add(id);
    }
    setStarredRows(newStarred);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(paginatedData.map(item => item.id));
      setSelectedRows(allIds);
    }
  };

  const handleApproveClick = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const handleRejectClick = (request) => {
    setSelectedRequest(request);
    setShowRejectModal(true);
  };

  const handleApproveRequest = () => {
    if (selectedRequest) {
      setData(data.map(item =>
        item.id === selectedRequest.id
          ? { ...item, status: '1' }
          : item
      ));
      setShowApproveModal(false);
      setSelectedRequest(null);
    }
  };

  const handleRejectRequest = () => {
    if (selectedRequest) {
      setData(data.map(item =>
        item.id === selectedRequest.id
          ? { ...item, status: '0' }
          : item
      ));
      setShowRejectModal(false);
      setSelectedRequest(null);
      setRejectReason('');
    }
  };

  const getStatusDisplay = (status) => {
    if (status === '0') {
      return { name: 'Rejected', class: 'bg-danger' };
    } else {
      return { name: 'Pending', class: 'bg-warning' };
    }
  };

  return (
    <>
      <div className="delete-request-container">
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="input-icon input-icon-start position-relative">
              <span className="input-icon-addon text-dark">
               
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="card-body">
            {/* Delete Requests Table */}
            <div className="table-responsive custom-table">
              <table className="table table-hover" id="delete_request">
                <thead className="table-light">
                  <tr>
                    <th className="no-sort">
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="select-all"
                          checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                          onChange={handleSelectAll}
                        />
                      </div>
                    </th>
                    <th>Star</th>
                    <th onClick={() => handleSort('customer_name')} style={{ cursor: 'pointer' }}>
                      Customer Name {sortConfig.key === 'customer_name' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                    </th>
                    <th onClick={() => handleSort('created')} style={{ cursor: 'pointer' }}>
                      Created {sortConfig.key === 'created' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                    </th>
                    <th onClick={() => handleSort('delete_request')} style={{ cursor: 'pointer' }}>
                      Delete Request {sortConfig.key === 'delete_request' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                    </th>
                    <th onClick={() => handleSort('reason')} style={{ cursor: 'pointer' }}>
                      Reason {sortConfig.key === 'reason' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                    </th>
                    <th>Status</th>
                    <th className="no-sort">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row) => {
                    const statusDisplay = getStatusDisplay(row.status);
                    return (
                      <tr key={row.id}>
                        <td>
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={selectedRows.has(row.id)}
                              onChange={() => handleSelectRow(row.id)}
                            />
                          </div>
                        </td>
                        <td>
                          <div
                            className="set-star rating-select"
                            onClick={() => handleToggleStar(row.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <i className={`ti ti-star-${starredRows.has(row.id) ? 'filled' : 'outline'} fs-16`}></i>
                          </div>
                        </td>
                        <td>
                          <h6 className="d-flex align-items-center fs-14 fw-medium mb-0">
                            <a href="javascript:void(0);" className="avatar avatar-rounded me-2">
                              <img src={row.customer_image} alt="User Image" />
                            </a>
                            <a href="javascript:void(0);" className="d-flex flex-column">
                              {row.customer_name}
                              <span className="text-body fs-13 fw-normal d-inline-block mt-1">
                                {row.customer_no}
                              </span>
                            </a>
                          </h6>
                        </td>
                        <td>{row.created}</td>
                        <td>{row.delete_request}</td>
                        <td>{row.reason}</td>
                        <td>
                          <span className={`badge badge-pill badge-status ${statusDisplay.class}`}>
                            {statusDisplay.name}
                          </span>
                        </td>
                        <td>
                          <div className="dropdown table-action">
                            <button
                              className="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                                onClick={() => handleApproveClick(row)}
                              >
                                <i className="ti ti-check"></i> Approve
                              </a>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                                onClick={() => handleRejectClick(row)}
                              >
                                <i className="ti ti-x"></i> Reject
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {paginatedData.length === 0 && (
              <div className="text-center py-4">
                <p className="text-muted">No records found</p>
              </div>
            )}

            {/* Pagination */}
            <div className="row align-items-center mt-3">
              <div className="col-md-6">
                <div className="datatable-length">
                  <label>
                    Show
                    <select
                      className="form-select form-select-sm ms-2 me-2"
                      value={entriesPerPage}
                      onChange={(e) => {
                        setEntriesPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      style={{ width: 'auto', display: 'inline-block' }}
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="datatable-paginate">
                  <nav>
                    <ul className="pagination pagination-sm justify-content-end">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <i className="ti ti-chevron-left"></i> Previous
                        </button>
                      </li>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </button>
                        </li>
                      ))}

                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next <i className="ti ti-chevron-right"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Approve Request Modal */}
        {showApproveModal && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Approve Delete Request</h5>
                  <button
                    className="btn-close custom-btn-close border p-1 me-0 text-dark"
                    onClick={() => setShowApproveModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to approve the delete request for <strong>{selectedRequest?.customer_name}</strong>?</p>
                  <div className="alert alert-info">
                    <strong>Reason:</strong> {selectedRequest?.reason}
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="d-flex align-items-center justify-content-end m-0">
                    <button
                      type="button"
                      className="btn btn-light me-2"
                      onClick={() => setShowApproveModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleApproveRequest}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reject Request Modal */}
        {showRejectModal && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Reject Delete Request</h5>
                  <button
                    className="btn-close custom-btn-close border p-1 me-0 text-dark"
                    onClick={() => setShowRejectModal(false)}
                  ></button>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleRejectRequest(); }}>
                  <div className="modal-body">
                    <p>Are you sure you want to reject the delete request for <strong>{selectedRequest?.customer_name}</strong>?</p>
                    <div className="mb-3">
                      <label className="form-label">Rejection Reason (Optional)</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        placeholder="Enter reason for rejection"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="d-flex align-items-center justify-content-end m-0">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        onClick={() => setShowRejectModal(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-danger">
                        Reject
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}