"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-success">Refunded Orders</h2>

        <span className="badge bg-success fs-6 px-3 py-2">
          Status: Refunded
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Total Refunded Orders</h6>
            <h3 className="fw-bold text-success">84</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Refunded Today</h6>
            <h3 className="fw-bold text-primary">6</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Avg Refund Amount</h6>
            <h4 className="fw-semibold text-info">$72.40</h4>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <h5 className="fw-semibold mb-3">Refunded Order Details</h5>

      <div className="card shadow-sm border-0">
        <div className="card-body">

          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Refund Date</th>
                  <th>Refund Method</th>
                  <th>Status</th>
                  <th>Refund Amount</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>#RF1001</td>
                  <td>Amit Verma</td>
                  <td>21 Nov 2025</td>
                  <td>Bank Transfer</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>$120.00</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#RF1002</td>
                  <td>Sophia Carter</td>
                  <td>20 Nov 2025</td>
                  <td>UPI</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>$45.90</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#RF1003</td>
                  <td>Rajat Sharma</td>
                  <td>19 Nov 2025</td>
                  <td>Wallet Refund</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>$68.50</td>
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
