"use client";

const page = () => {
  return (
    <div className="container mt-5">

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className=" text-dark">Shipped Orders</h4>
        <span className="badge bg-info text-dark fs-6 px-3 py-2">
          Status: Shipped
        </span>
      </div>

      {/* Card Section */}
      <div className="card shadow-sm border-0">
        <div className="card-body">

          {/* Info Row */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div style={{backgroundColor: "#9AE79D"}} className="p-3 rounded">
                <h6 className="text-dark mb-1 fw-medium">Total Shipped Orders</h6>
                <h3 className="fw-medium text-dark">152</h3>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div style={{backgroundColor: "#A5EEFF"}} className="p-3 rounded">
                <h6 className="text-dark mb-1 fw-medium">Pending Deliveries</h6>
                <h3 className="fw-medium text-dark">28</h3>
              </div>
            </div>  

            <div className="col-md-4 mb-3">
              <div style={{backgroundColor: "#F7F292"}}  className="p-3 rounded">
                <h6 className="text-dark fw-medium mb-1">Delivered Today</h6>
                <h3 className="fw-medium text-dark">16</h3>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <h5 className="fw-semibold mb-3">Shipment Details</h5>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Shipped Date</th>
                  <th>Carrier</th>
                  <th>Tracking No.</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>#ORD2456</td>
                  <td>John Anderson</td>
                  <td>20 Nov 2025</td>
                  <td>FedEx</td>
                  <td>FX99200123</td>
                  <td>
                    <span className="badge bg-info text-light">Shipped</span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>#ORD2457</td>
                  <td>Emily Carter</td>
                  <td>20 Nov 2025</td>
                  <td>DHL</td>
                  <td>DHL1120045</td>
                  <td>
                    <span className="badge bg-info text-light">Shipped</span>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>#ORD2458</td>
                  <td>Michael Scott</td>
                  <td>19 Nov 2025</td>
                  <td>BlueDart</td>
                  <td>BD44500234</td>
                  <td>
                    <span className="badge bg-info text-light">Shipped</span>
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
