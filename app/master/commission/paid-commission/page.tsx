'use client';

import React, { useState, useMemo } from 'react';

// Dummy commission data
const initialCommissions = [
  { id: 1, product: 'Apple iPhone 15', type: 'Percentage', value: 5, status: 'paid', created_at: '2024-11-01T10:00:00Z' },
  { id: 2, product: 'Samsung Galaxy S24', type: 'Fixed', value: 15, status: 'paid', created_at: '2024-11-05T12:00:00Z' },
  { id: 3, product: 'Sony Headphones WH-1000XM5', type: 'Percentage', value: 7, status: 'approved', created_at: '2024-11-10T09:30:00Z' },
  { id: 4, product: 'Dell UltraSharp 27” Monitor', type: 'Percentage', value: 6, status: 'paid', created_at: '2024-11-02T11:00:00Z' },
];

const page = () => {
  const [commissions] = useState(initialCommissions);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter paid commissions
  const paidCommissions = useMemo(() => {
    return commissions.filter(
      (c) =>
        c.status === 'paid' &&
        (c.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
         c.type.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [commissions, searchTerm]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return paidCommissions.slice(start, start + entriesPerPage);
  }, [paidCommissions, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(paidCommissions.length / entriesPerPage);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  const getStatusBadge = (status: string) => {
    return <span className="badge bg-success">{status.toUpperCase()}</span>;
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 fw-bold">Paid Commissions</h1>

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
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No paid commissions found
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
