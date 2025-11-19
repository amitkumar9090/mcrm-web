'use client';

import React, { useState, useMemo } from 'react';
import './transactions-page.css';

export default function TransactionsPage() {
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
      type: 'Wallet Topup',
      amount: '+$650',
      date: '25 Sep 2025, 01:22 PM',
      payment_type: 'Paypal',
      status: '1'
    },
    {
      id: 2,
      si_no: '',
      select: '',
      type: 'Purchase',
      amount: '-$350',
      date: '27 Sep 2025, 04:18 PM',
      payment_type: 'Cash',
      status: '0'
    },
    {
      id: 3,
      si_no: '',
      select: '',
      type: 'Refund',
      amount: '+$100',
      date: '29 Sep 2025, 10:08 AM',
      payment_type: 'Paypal',
      status: '1'
    }
  ];

  const [data] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [starredRows, setStarredRows] = useState(new Set());

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.payment_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        // Handle numeric amounts
        if (sortConfig.key === 'amount') {
          aVal = parseFloat(aVal.replace(/[$+]/g, ''));
          bVal = parseFloat(bVal.replace(/[$+]/g, ''));
        }

        if (aVal < bVal) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aVal > bVal) {
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

  const getStatusDisplay = (status) => {
    // Based on your logic: both 0 and 1 show "Completed"
    if (status === '0' || status === '1') {
      return { name: 'Completed', class: 'bg-success' };
    }
    return { name: 'Cancel', class: 'bg-danger' };
  };

  return (
    <div className="transactions-container">
      <div className="card">
        <div className="card-header">
          <h4>Transactions</h4>
        </div>

        <div className="card-body">
          {/* Search Box */}
          <div className="search-box mb-3">
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

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hovere">
              <thead>
                <tr>
                  <th>
                    <div className="form-check form-check-md">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                        onChange={handleSelectAll}
                      />
                    </div>
                  </th>
                  <th>Star</th>
                  <th onClick={() => handleSort('type')} style={{ cursor: 'pointer' }}>
                    Type {sortConfig.key === 'type' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('amount')} style={{ cursor: 'pointer' }}>
                    Amount {sortConfig.key === 'amount' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('date')} style={{ cursor: 'pointer' }}>
                    Date {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('payment_type')} style={{ cursor: 'pointer' }}>
                    Payment Type {sortConfig.key === 'payment_type' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th>Status</th>
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
                          className={`set-star rating-select ${starredRows.has(row.id) ? 'filled' : ''}`}
                          onClick={() => handleToggleStar(row.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={`ti ti-star-${starredRows.has(row.id) ? 'filled' : 'outline'} fs-16`}></i>
                        </div>
                      </td>
                      <td>
                        <span className="fw-medium">{row.type}</span>
                      </td>
                      <td>
                        <span className={`amount ${row.amount.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                          {row.amount}
                        </span>
                      </td>
                      <td>{row.date}</td>
                      <td>
                        <span className="badge badge-light">{row.payment_type}</span>
                      </td>
                      <td>
                        <span className={`badge badge-pill badge-status ${statusDisplay.class}`}>
                          {statusDisplay.name}
                        </span>
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

          {/* Pagination and entries */}
          <div className="d-flex justify-content-between align-items-center mt-3">
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

            <div className="datatable-paginate">
              <nav>
                <ul className="pagination pagination-sm">
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

            <div className="text-muted fs-13">
              {(currentPage - 1) * entriesPerPage + 1} - {Math.min(currentPage * entriesPerPage, sortedData.length)} of{' '}
              {sortedData.length} items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}