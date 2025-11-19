'use client';
import React, { useState, useMemo } from 'react';
import './page.css'; // Make sure to create corresponding CSS

export default function ContactMessagesPage() {
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
      phone: '1234567890',
      email: 'robertson@example.com',
      message: 'Duis aute irure dolor in reprehenderit',
      created: '25 Sep 2025, 12:12 pm',
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
      phone: '+1 989757485',
      email: 'sharon@example.com',
      message: 'Excepteur sint occaecat cupidatat',
      created: '27 Sep 2025, 07:40 am',
      status: '1',
      Action: ''
    },
    {
      id: 3,
      si_no: '',
      select: '',
      customer_name: 'Vaughan Lewis',
      customer_image: '/assets/img/profiles/avatar-21.jpg',
      customer_no: 'Senior Manager',
      phone: '+1 546555455',
      email: 'vaughan12@example.com',
      message: 'Lorem ipsum dolor sit consectetur',
      created: '29 Sep 2025, 08:20 am',
      status: '0',
      Action: ''
    },
    {
      id: 4,
      si_no: '',
      select: '',
      customer_name: 'Jessica Louise',
      customer_image: '/assets/img/profiles/avatar-23.jpg',
      customer_no: 'Test Engineer',
      phone: '+1 454478787',
      email: 'jessica13@example.com',
      message: 'Nemo enim ipsam voluptatem quia',
      created: '25 Sep 2025, 12:12 pm',
      status: '0',
      Action: ''
    }
  ];

  const [data] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [starredRows, setStarredRows] = useState(new Set());

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter(item =>
      item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.message.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className="contact-messages-container">
      <div className="card">
        <div className="card-header">
          <h4>Contact Messages</h4>
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
            <table className="table table-hover">
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
                  <th onClick={() => handleSort('customer_name')} style={{ cursor: 'pointer' }}>
                    Customer Name {sortConfig.key === 'customer_name' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('phone')} style={{ cursor: 'pointer' }}>
                    Phone {sortConfig.key === 'phone' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
                    Email {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th>Message</th>
                  <th onClick={() => handleSort('created')} style={{ cursor: 'pointer' }}>
                    Created {sortConfig.key === 'created' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row) => (
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
                        <i className={`ti ti-star-${starredRows.has(row.id) ? 'filled' : 'outline'}`}></i>
                      </div>
                    </td>
                    <td>
                      <h6 className="d-flex align-items-center fs-14 fw-medium mb-0">
                        <a href="javascript:void(0);" className="avatar me-2">
                          <img
                            className="img-fluid rounded-circle"
                            src={row.customer_image}
                            alt="User Image"
                            width="32"
                            height="32"
                          />
                        </a>
                        <a href="javascript:void(0);" className="d-flex flex-column">
                          {row.customer_name}
                          <span className="text-body fs-13 fw-normal mt-1">{row.customer_no}</span>
                        </a>
                      </h6>
                    </td>
                    <td>{row.phone}</td>
                    <td>{row.email}</td>
                    <td>{row.message}</td>
                    <td>{row.created}</td>
                    <td>
                      <span
                        className={`badge badge-pill badge-status ${
                          row.status === '0' ? 'bg-success' : 'bg-danger'
                        }`}
                      >
                        {row.status === '0' ? 'Active' : 'Inactive'}
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
                            data-bs-toggle="modal"
                            data-bs-target="#edit_contact"
                          >
                            <i className="ti ti-edit text-blue"></i> Edit
                          </a>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_contact"
                          >
                            <i className="ti ti-trash"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
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