import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <section className="notfound-fullframe d-flex align-items-center justify-content-center">
    <div className="notfound-card text-center">
      <div className="mb-4">
        <span style={{ fontSize: "6rem" }} role="img" aria-label="Magnifying Glass">🔍</span>
      </div>
      <h1 className="display-2 fw-bold text-primary mb-2">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4 text-secondary" style={{ maxWidth: 400, margin: "0 auto" }}>
        Sorry, we couldn't find the page you're looking for.<br />
        It might have been removed, renamed, or did not exist in the first place.
      </p>
      <Link to="/" className="btn btn-lg btn-primary shadow-sm px-4 py-2">Back to Home</Link>
    </div>
  </section>
);

export default NotFoundPage;
