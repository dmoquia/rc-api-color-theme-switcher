import React from "react";
import { Link } from "react-router-dom";

function Country({ png, common, population, region, capital }) {
  return (
    <div className="row">
      <div className="s12 m4 l3 ">
        <div className="card ">
          <div className="card-image ">
            <Link to={`/country/${common}`}>
              {" "}
              <img src={png} alt={png} />
            </Link>
          </div>
          <div className="card-content text-hide-me ">
            <p className="country-name truncate">{common}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
