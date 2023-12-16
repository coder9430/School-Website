import React from "react";

export default function ApplicationFlow() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body text-center p-3 bg-light rounded">
          <h5 className="card-title m-0">Application Flow</h5>
        </div>
        <hr className="m-0" />
        <div className="text-center mt-2 mb-2">
          <p className="card-text">
            Follow the Steps below to fill the form
          </p>
        </div>
        <ul className="list-group list-unstyled">
          <li className="list-group-item">
            <b>Step 1:</b> <a href="#" style={{ textDecoration: 'none' }}>Identity Info</a>
          </li>
          <li className="list-group-item">
            <b>Step 2:</b> <a href="#" style={{ textDecoration: 'none' }}>Enrollment Related Info</a>
          </li>
          <li className="list-group-item">
            <b>Step 3:</b> <a href="#" style={{ textDecoration: 'none' }}>Previous School Info</a>
          </li>
          <li className="list-group-item">
            <b>Step 4:</b> <a href="#" style={{ textDecoration: 'none' }}>Upload Documents</a>
          </li>
          <li className="list-group-item">
            <b>Step 5:</b> <a href="#" style={{ textDecoration: 'none' }}>Submit Application</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
