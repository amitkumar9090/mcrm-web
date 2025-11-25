"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-danger">Cancelled Orders</h2>
        <span className="badge bg-danger fs-6 px-3 py-2">
          Status: Cancelled
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Total Cancelled Orders</h6>
            <h3 className="fw-bold text-danger">145</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Cancelled Today</h6>
            <h3 className="fw-bold text-primary">8</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Top Cancel Reason</h6>
            <h4 className="fw-semibold text-warning">Order Not Required</h4>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <h5 className="fw-semibold mb-3">Cancelled Order Details</h5>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle">
              <thead className="table-danger">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Cancelled On</th>
                  <th>Reason</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>#ORD4001</td>
                  <td>Ravi Patel</td>
                  <td>21 Nov 2025</td>
                  <td>Customer Cancelled</td>
                  <td>UPI</td>
                  <td>$120.00</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#ORD4002</td>
                  <td>Alice Johnson</td>
                  <td>20 Nov 2025</td>
                  <td>Payment Failed</td>
                  <td>Credit Card</td>
                  <td>$89.00</td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#ORD4003</td>
                  <td>Karan Singh</td>
                  <td>19 Nov 2025</td>
                  <td>Product Not Needed</td>
                  <td>Wallet</td>
                  <td>$150.00</td>
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
