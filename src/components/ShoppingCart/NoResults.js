import React from "react";

const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          alt="Empty Tree"
        />
        <h2>Sorry, no products matched your search!</h2>
        <p>Enter a different keyword and try.</p>
      </div>
    </div>
  );
};

export default NoResults;
