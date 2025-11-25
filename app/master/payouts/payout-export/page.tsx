'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Payout Export Data
// ---------------------------
const initialExports = [
  { id: 1, fileName: 'Payout_101.csv', totalRecords: 5, status: 'completed', date: '2024-11-10T10:00:00Z' },
  { id: 2, fileName: 'Payout_102.csv', totalRecords: 8, status: 'processing', date: '2024-11-12T14:30:00Z' },
  { id: 3, fileName: 'Payout_103.csv', totalRecords: 6, status: 'completed', date: '2024-11-15T09:15:00Z' },
];

// ---------------------------
// Page Component
// ---------------------------
const page = () => {
  const [exports] = useState(initialExports);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtered exports
  const filtered = useMemo(() => {
    return exports.filter(
      (e) =>
        e.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [exports, searchTerm]);

  // Pagination
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filtered.slice(start, start + entriesPerPage);
  }, [filtered, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(filtered.length / entriesPerPage);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Payout Export</h4>

      {/* Search & Export */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by file name or status..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: '300px' }}
        />
        <button className="btn btn-primary">Export New CSV</button>
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead className="table-light">
                <tr>
                  <th>File Name</th>
                  <th>Total Records</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No export files found
                    </td>
                  </tr>
                ) : (
                  paginated.map((exp) => (
                    <tr key={exp.id}>
                      <td>{exp.fileName}</td>
                      <td>{exp.totalRecords}</td>
                      <td>{formatDate(exp.date)}</td>
                      <td>
                        <span
                          className={`badge ${
                            exp.status === 'completed'
                              ? 'bg-success'
                              : exp.status === 'processing'
                              ? 'bg-warning text-dark'
                              : 'bg-secondary'
                          }`}
                        >
                          {exp.status.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div>
              Show{' '}
              <select
                className="form-select d-inline-block w-auto"
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>{' '}
              entries
            </div>

            <ul className="pagination pagination-sm mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <li key={p} className={`page-item ${currentPage === p ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(p)}>
                    {p}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
