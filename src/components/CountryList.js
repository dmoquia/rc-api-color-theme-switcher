import React from "react";
import Country from "./Country";
import Loader from "./Loader";
function CountryList({ loading, countries }) {
  if (loading) {
    return <Loader />;
  }

  if (countries?.length < 1 && loading) {
    return <h2>no countries match your criteria</h2>;
  }

  return (
    <div className="container">
      {countries?.map((country) => (
        <Country key={country?.common} {...country} />
      ))}
    </div>
  );
}

export default CountryList;
