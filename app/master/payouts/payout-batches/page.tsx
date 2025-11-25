'use client';

import React, { useState, useMemo } from 'react';

// ---------------------------
// Dummy Payout Batches Data
// ---------------------------
const initialBatches = [
  { id: 1, batchName: 'Batch #101', totalAmount: 1500.50, totalTransactions: 5, status: 'completed', date: '2024-11-10T10:00:00Z' },
  { id: 2, batchName: 'Batch #102', totalAmount: 2500.00, totalTransactions: 8, status: 'processing', date: '2024-11-12T14:30:00Z' },
  { id: 3, batchName: 'Batch #103', totalAmount: 1750.25, totalTransactions: 6, status: 'completed', date: '2024-11-15T09:15:00Z' },
];

// ---------------------------
// Page Component
// ---------------------------
const page = () => {
  const [batches] = useState(initialBatches);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Filtered batches
  const filtered = useMemo(() => {
    return batches.filter(
      (b) =>
        b.batchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [batches, searchTerm]);

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
      <h4 className="mb-4 fw-bold">Payout Batches</h4>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by batch name or status..."
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
                  <th>Batch Name</th>
                  <th>Total Amount</th>
                  <th>Total Transactions</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted">
                      No payout batches found
                    </td>
                  </tr>
                ) : (
                  paginated.map((batch) => (
                    <tr key={batch.id}>
                      <td>{batch.batchName}</td>
                      <td>${batch.totalAmount.toFixed(2)}</td>
                      <td>{batch.totalTransactions}</td>
                      <td>{formatDate(batch.date)}</td>
                      <td>
                        <span
                          className={`badge ${
                            batch.status === 'completed' ? 'bg-success' : batch.status === 'processing' ? 'bg-warning text-dark' : 'bg-secondary'
                          }`}
                        >
                          {batch.status.toUpperCase()}
                        </span>
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
