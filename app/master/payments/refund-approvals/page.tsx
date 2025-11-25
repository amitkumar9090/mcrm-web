'use client';

import React, { useState, useMemo } from 'react';

// Dummy refund data
const initialRefunds = [
  { id: 1, orderId: 'ORD-1002', user: 'John Doe', amount: 129.99, method: 'Credit Card', date: '2024-11-18T10:30:00Z', status: 'pending' },
  { id: 2, orderId: 'ORD-1006', user: 'Jane Smith', amount: 49.99, method: 'PayPal', date: '2024-11-19T14:15:00Z', status: 'approved' },
  { id: 3, orderId: 'ORD-1012', user: 'Alice Johnson', amount: 199.99, method: 'Stripe', date: '2024-11-20T09:00:00Z', status: 'rejected' },
];

const page = () => {
  const [refunds, setRefunds] = useState(initialRefunds);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter + Pagination
  const filtered = useMemo(() => {
    return refunds.filter(
      (r) =>
        r.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.method.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [refunds, searchTerm]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return filtered.slice(start, start + entriesPerPage);
  }, [filtered, currentPage, entriesPerPage]);

  const totalPages = Math.ceil(filtered.length / entriesPerPage);

  // Format date
  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  };

  // Status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="badge bg-success">{status}</span>;
      case 'rejected':
        return <span className="badge bg-danger">{status}</span>;
      default:
        return <span className="badge bg-warning text-dark">{status}</span>;
    }
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold">Refund Approvals</h4>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Order ID, User, or Method..."
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
                  <th>Order ID</th>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-4 text-muted">
                      No refund requests found
                    </td>
                  </tr>
                ) : (
                  paginated.map((r) => (
                    <tr key={r.id}>
                      <td>{r.orderId}</td>
                      <td>{r.user}</td>
                      <td>${r.amount.toFixed(2)}</td>
                      <td>{r.method}</td>
                      <td>{formatDate(r.date)}</td>
                      <td>{getStatusBadge(r.status)}</td>
                      <td>
                        {r.status === 'pending' && (
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() =>
                                setRefunds((prev) =>
                                  prev.map((item) =>
                                    item.id === r.id ? { ...item, status: 'approved' } : item
                                  )
                                )
                              }
                            >
                              Approve
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() =>
                                setRefunds((prev) =>
                                  prev.map((item) =>
                                    item.id === r.id ? { ...item, status: 'rejected' } : item
                                  )
                                )
                              }
                            >
                              Reject
                            </button>
                          </div>
                        )}
                        {r.status !== 'pending' && (
                          <button className="btn btn-sm btn-secondary" disabled>
                            {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                          </button>
                        )}
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
