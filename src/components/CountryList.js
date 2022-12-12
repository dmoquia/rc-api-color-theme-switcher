import React from "react";
import Country from "./Country";
function CountryList({ loading, countries }) {
  console.log(countries?.length);
  if (loading) {
    return <h1>loading...</h1>;
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
