'use client';

import React, { useState, useMemo } from 'react';

// Dummy failed payment data
const initialPayments = [
  { id: 1, orderId: 'ORD-1001', user: 'John Doe', amount: 129.99, method: 'Credit Card', date: '2024-11-18T10:30:00Z', reason: 'Insufficient Funds' },
  { id: 2, orderId: 'ORD-1005', user: 'Jane Smith', amount: 49.99, method: 'PayPal', date: '2024-11-19T14:15:00Z', reason: 'Payment Declined' },
  { id: 3, orderId: 'ORD-1010', user: 'Alice Johnson', amount: 199.99, method: 'Stripe', date: '2024-11-20T09:00:00Z', reason: 'Expired Card' },
];

const page = () => {
  const [payments] = useState(initialPayments);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filter + Pagination
  const filtered = useMemo(() => {
    return payments.filter(
      (p) =>
        p.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.method.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [payments, searchTerm]);

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

  return (
    <div className="container py-4">

      <h4 className="mb-4 fw-bold">Failed Payments</h4>

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
                  <th>Failure Reason</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-muted">
                      No failed payments found
                    </td>
                  </tr>
                ) : (
                  paginated.map((p) => (
                    <tr key={p.id}>
                      <td>{p.orderId}</td>
                      <td>{p.user}</td>
                      <td>${p.amount.toFixed(2)}</td>
                      <td>{p.method}</td>
                      <td>{formatDate(p.date)}</td>
                      <td>{p.reason}</td>
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
                <li
                  key={p}
                  className={`page-item ${currentPage === p ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => setCurrentPage(p)}>
                    {p}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
              >
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
