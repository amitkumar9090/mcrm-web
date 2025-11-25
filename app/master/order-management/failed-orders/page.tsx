"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Failed Orders</h2>

        <span className="badge bg-danger fs-6 px-3 py-2">
          Payment Failed / System Errors
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Total Failed Orders</h6>
            <h3 className="fw-bold text-danger">47</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Today Failed</h6>
            <h3 className="fw-bold text-warning">6</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Top Failure Reason</h6>
            <h4 className="fw-semibold text-dark">Payment Gateway Error</h4>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <h5 className="fw-semibold mb-3">Failed Order Details</h5>

      <div className="card shadow-sm border-0">
        <div className="card-body">

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-danger">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Reason</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>#FLD1024</td>
                  <td>Aarav Kapoor</td>
                  <td>21 Nov 2025</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Insufficient Funds
                    </span>
                  </td>
                  <td>$79.99</td>
                  <td>
                    <span className="badge bg-danger">Failed</span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#FLD1025</td>
                  <td>Neha Verma</td>
                  <td>21 Nov 2025</td>
                  <td>
                    <span className="badge bg-dark">
                      Payment Gateway Timeout
                    </span>
                  </td>
                  <td>$129.50</td>
                  <td>
                    <span className="badge bg-danger">Failed</span>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#FLD1026</td>
                  <td>John Carter</td>
                  <td>20 Nov 2025</td>
                  <td>
                    <span className="badge bg-secondary">
                      Card Verification Error
                    </span>
                  </td>
                  <td>$45.00</td>
                  <td>
                    <span className="badge bg-danger">Failed</span>
                  </td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

export default page;
