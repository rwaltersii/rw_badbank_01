// Imported React Modules
import React from "react";

// Imported Styles
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="bankicon.jpg"
              className="img-fluid rounded-start"
              alt="RW Bad Bank"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Welcome to the RW Bad Bank</h5>
              <p className="card-text">For all your banking needs.</p>
              <p className="card-text">
                <small className="text-muted">
                  Select an option from the menu to continue.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
