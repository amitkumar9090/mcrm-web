'use client';

import React, { useState, useMemo } from 'react';

// Dummy commission data
const initialCommissions = [
  { id: 1, product: 'Apple iPhone 15', type: 'Percentage', value: 5, status: 'pending', created_at: '2024-11-01T10:00:00Z' },
  { id: 2, product: 'Samsung Galaxy S24', type: 'Fixed', value: 15, status: 'approved', created_at: '2024-11-05T12:00:00Z' },
  { id: 3, product: 'Sony Headphones WH-1000XM5', type: 'Percentage', value: 7, status: 'pending', created_at: '2024-11-10T09:30:00Z' },
];

const page = () => {
  const [commissions, setCommissions] = useState(initialCommissions);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter pending commissions
  const pendingCommissions = useMemo(() => {
    return commissions.filter(
      (c) =>
        c.status === 'pending' &&
        (c.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
         c.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [commissions, searchTerm]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return pendingCommissions.slice(start, start + entriesPerPage);
  }, [pendingCommissions, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(pendingCommissions.length / entriesPerPage);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  const getStatusBadge = (status: string) => {
    if (status === 'pending') return <span className="badge bg-warning text-dark">{status}</span>;
    if (status === 'approved') return <span className="badge bg-success">{status}</span>;
    return <span className="badge bg-secondary">{status}</span>;
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold">Pending Commissions</h1>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by product or type..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: '400px' }}
        />
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Commission Type</th>
                  <th>Value</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-muted">
                      No pending commissions found
                    </td>
                  </tr>
                ) : (
                  paginated.map((c) => (
                    <tr key={c.id}>
                      <td>{c.product}</td>
                      <td>{c.type}</td>
                      <td>{c.type === 'Percentage' ? `${c.value}%` : `$${c.value}`}</td>
                      <td>{formatDate(c.created_at)}</td>
                      <td>{getStatusBadge(c.status)}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={() =>
                            setCommissions((prev) =>
                              prev.map((com) =>
                                com.id === c.id ? { ...com, status: 'approved' } : com
                              )
                            )
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            setCommissions((prev) =>
                              prev.map((com) =>
                                com.id === c.id ? { ...com, status: 'rejected' } : com
                              )
                            )
                          }
                        >
                          Reject
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
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
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
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
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
