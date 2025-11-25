"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Cash on Delivery (COD) Orders</h2>

        <span className="badge bg-dark fs-6 px-3 py-2">
          Payment Method: COD
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Total COD Orders</h6>
            <h3 className="fw-bold text-dark">234</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">COD Orders Today</h6>
            <h3 className="fw-bold text-primary">18</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow-sm bg-light">
            <h6 className="text-secondary mb-1">Avg Order Value</h6>
            <h4 className="fw-semibold text-info">$64.80</h4>
          </div>
        </div>

      </div>

      {/* Orders Table */}
      <h5 className="fw-semibold mb-3">COD Order Details</h5>

      <div className="card shadow-sm border-0">
        <div className="card-body">

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Delivery Status</th>
                  <th>Amount</th>
                  <th>Payment</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>#COD2451</td>
                  <td>Rahul Mehta</td>
                  <td>21 Nov 2025</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      Out for Delivery
                    </span>
                  </td>
                  <td>$89.00</td>
                  <td>
                    <span className="badge bg-dark">COD</span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#COD2452</td>
                  <td>Priya Sharma</td>
                  <td>21 Nov 2025</td>
                  <td>
                    <span className="badge bg-info text-dark">
                      Processing
                    </span>
                  </td>
                  <td>$54.90</td>
                  <td>
                    <span className="badge bg-dark">COD</span>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#COD2453</td>
                  <td>Daniel Carter</td>
                  <td>20 Nov 2025</td>
                  <td>
                    <span className="badge bg-success">
                      Delivered
                    </span>
                  </td>
                  <td>$120.50</td>
                  <td>
                    <span className="badge bg-dark">COD</span>
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
