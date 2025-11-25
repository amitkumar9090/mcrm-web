"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-warning">Returned Orders</h2>
        <span className="badge bg-warning text-dark fs-6 px-3 py-2">
          Status: Returned
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Total Returned Orders</h6>
            <h3 className="fw-bold text-warning">52</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Returned Today</h6>
            <h3 className="fw-bold text-primary">3</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Most Common Reason</h6>
            <h4 className="fw-semibold text-danger">Damaged Item</h4>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <h5 className="fw-semibold mb-3">Returned Order Details</h5>

      <div className="card shadow-sm border-0">
        <div className="card-body">

          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle">
              <thead className="table-warning">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Returned On</th>
                  <th>Return Reason</th>
                  <th>Refund Status</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>#RET5001</td>
                  <td>Rohit Sharma</td>
                  <td>21 Nov 2025</td>
                  <td>Damaged Item</td>
                  <td>
                    <span className="badge bg-success">Refunded</span>
                  </td>
                  <td>$120.00</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#RET5002</td>
                  <td>Emily Brown</td>
                  <td>20 Nov 2025</td>
                  <td>Wrong Product Delivered</td>
                  <td>
                    <span className="badge bg-secondary">Pending</span>
                  </td>
                  <td>$75.00</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#RET5003</td>
                  <td>Naresh Kumar</td>
                  <td>19 Nov 2025</td>
                  <td>Product Not As Described</td>
                  <td>
                    <span className="badge bg-warning text-dark">Processing</span>
                  </td>
                  <td>$90.00</td>
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
