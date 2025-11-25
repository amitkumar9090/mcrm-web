"use client";

import React, { useState } from 'react';

// Dummy data
// Dummy data for Store Withdrawal Requests
const dummyWithdrawals = [
  {
    id: 1001,
    store_name: 'Tech Haven Store',
    amount: 550.00,
    payment_method: 'Bank Transfer (USAA)',
    requested_on: '2025-11-19T10:30:00Z',
    updated_on: '2025-11-20T14:22:00Z',
    status: 'completed' // Processed successfully
  },
  {
    id: 1002,
    store_name: 'Fashion Forward Boutique',
    amount: 1250.50,
    payment_method: 'PayPal (sarah@example.com)',
    requested_on: '2025-11-18T09:15:00Z',
    updated_on: '2025-11-18T09:15:00Z',
    status: 'pending' // Awaiting review
  },
  {
    id: 1003,
    store_name: 'Global Gadgets Inc.',
    amount: 300.00,
    payment_method: 'Stripe Account',
    requested_on: '2025-11-17T11:20:00Z',
    updated_on: '2025-11-17T16:30:00Z',
    status: 'rejected' // Denied
  },
  {
    id: 1004,
    store_name: 'Artisan Crafts Co.',
    amount: 85.99,
    payment_method: 'Bank Transfer (BofA)',
    requested_on: '2025-11-16T13:45:00Z',
    updated_on: '2025-11-19T11:15:00Z',
    status: 'processing' // Currently being handled
  },
  {
    id: 1005,
    store_name: 'The Book Nook',
    amount: 450.00,
    payment_method: 'PayPal (david@example.com)',
    requested_on: '2025-11-15T15:30:00Z',
    updated_on: '2025-11-18T09:20:00Z',
    status: 'completed'
  },
  {
    id: 1006,
    store_name: 'Healthy Living Market',
    amount: 920.75,
    payment_method: 'Stripe Account',
    requested_on: '2025-11-14T08:00:00Z',
    updated_on: '2025-11-14T08:00:00Z',
    status: 'pending'
  }
];


// Withdrawal Requests Table Component
function WithdrawalTable() {
  // Renamed to match the data context
  const [withdrawals] = useState(dummyWithdrawals);

  // Helper function to determine badge color based on status
  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-success';
      case 'pending':
        return 'bg-warning text-light';
      case 'rejected':
        return 'bg-danger';
      case 'processing':
        return 'bg-info text-light';
      default:
        return 'bg-secondary';
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  };

  // Format time ago
  const formatTimeAgo = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return formatDate(dateString);
  };

  // Removed getInitials as it is no longer relevant for Store Withdrawal Requests

  return (
    <div className="content pb-0">

      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4>
        Store Withdrawal Requests
          <span className="badge bg-primary ms-2">{withdrawals.length}</span>
        </h4>
      </div>

      <div className="card border-0 rounded-0">
        <div className="card-header d-flex justify-content-between">
          {/* Updated search placeholder */}
          <input type="text" className="form-control w-50" placeholder="Search requests by store or amount..." />
          {/* Updated button text for relevance */}
          <button className="btn btn-primary">New Withdrawal</button>
        </div>

        <div className="card-body">
          <div className="table-responsive custom-table">
            <table className="table table-nowrap">
              <thead className="table-light">
                <tr>
                  <th></th> {/* Checkbox column */}
                  <th>ID</th>
                  <th>Store Name</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Requested On</th>
                  <th>Updated On</th>
                  <th>Status</th>
                  <th className="text-end">Details</th>
                </tr>
              </thead>

              <tbody>
                {/* Renamed map variable to withdrawal for clarity */}
                {withdrawals.map((withdrawal) => (
                  <tr key={withdrawal.id}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>

                    {/* Mapping data to the new structure */}
                    <td>
                      <strong>#{withdrawal.id}</strong>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        {/* Removed avatar logic */}
                        <div>
                          <strong>{withdrawal.store_name}</strong>
                          {/* Displaying Store ID or a unique identifier here is common, if available */}
                          <div className="text-muted small">Store ID: {withdrawal.id}</div> 
                        </div>
                      </div>
                    </td>

                    {/* Formatted as currency */}
                    <td>
                      <strong>${withdrawal.amount.toFixed(2)}</strong>
                    </td> 

                    <td>{withdrawal.payment_method}</td>
                    
                    <td>{formatDate(withdrawal.requested_on)}</td>
                    
                    {/* Updated to use updated_on */}
                    <td>{formatTimeAgo(withdrawal.updated_on)}</td> 

                    <td>
                      <span className={`badge ${getStatusBadgeClass(withdrawal.status)}`}>
                        {/* Capitalized status for display */}
                        {withdrawal.status.charAt(0).toUpperCase() + withdrawal.status.slice(1)}
                      </span>
                    </td>

                    <td className="text-end">
                      <button className="btn btn-sm btn-outline-secondary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// FINAL PAGE EXPORT
export default function Page() {
  return (
    <div>
      <WithdrawalTable />
    </div>
  );
}