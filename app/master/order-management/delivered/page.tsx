"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className=" text-dark">Delivered Orders</h4>
        <span className="badge bg-success fs-6 px-3 py-2">
          Status: Delivered
        </span>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div style={{backgroundColor: "#B7B4D1"}} className="p-3 rounded shadow-sm">
            <h6 className="text-dark mb-1">Total Delivered Orders</h6>
            <h3 className="fw-medium text-dark">320</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div style={{backgroundColor: "#F5D995"}} className="p-3 rounded shadow-sm ">
            <h6 className="text-dark mb-1">Delivered Today</h6>
            <h3 className="fw-medium text-dark">42</h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div style={{backgroundColor: "#9AE79D"}} className="p-3 rounded shadow-sm">
            <h6 className="text-dark mb-1">Avg Delivery Time</h6>
            <h3 className="fw-medium text-dark">1.2 Days</h3>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <h5 className="fw-semibold mb-3">Delivered Order Details</h5>
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Delivered Date</th>
                  <th>Payment Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>#ORD3101</td>
                  <td>Sarah Wilson</td>
                  <td>20 Nov 2025</td>
                  <td>Credit Card</td>
                  <td>$185.00</td>
                  <td>
                    <span className="badge bg-success">Delivered</span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#ORD3102</td>
                  <td>David Martin</td>
                  <td>20 Nov 2025</td>
                  <td>UPI</td>
                  <td>$99.00</td>
                  <td>
                    <span className="badge bg-success">Delivered</span>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#ORD3103</td>
                  <td>Priya Sharma</td>
                  <td>19 Nov 2025</td>
                  <td>Cash on Delivery</td>
                  <td>$149.00</td>
                  <td>
                    <span className="badge bg-success">Delivered</span>
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
