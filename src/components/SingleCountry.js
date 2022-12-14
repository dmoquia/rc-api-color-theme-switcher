import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { flatNative, flatCurr, addComma, formatNum } from "../utils/helper";
import Loader from "./Loader";
const SingleCountry = () => {
  const { name } = useParams();

  const [country, setCountry] = useState(null);
  const [border, setBorder] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        if (country?.borders && country?.borders !== null) {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${country?.borders}`
          );
          const data = await res.json();
          if (data) {
            const query = data.filter((item) => item.name.common);
            setBorder(query);
          } else {
            setBorder(null);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [country?.borders]);

  useEffect(() => {
    (async function getCountry() {
      setLoading(true);
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();

        if (data) {
          const {
            name: { common, nativeName },
            flags: { svg: flag },
            population,
            region,
            subregion,
            capital,
            borders,
            tld,
            currencies,
            languages,
          } = data[0];
          const newCountry = {
            common,
            flag,
            population,
            region,
            subregion,
            capital,
            borders,
            tld,
            currencies,
            languages,
            nativeName,
          };
          setCountry(newCountry);
          setLoading(false);
        } else {
          setCountry(null);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [name]);

  if (loading) {
    return <Loader />;
  }
  if (!country) {
    return <h2>No country to display</h2>;
  } else {
    const {
      common: name,
      flag,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      nativeName,
    } = country;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>

        <div className="details">
          <img src={flag} alt={name} />
          <div className="country-info">
            <h2 className="section-title">{name}</h2>
            <div className="text-field">
              <ul className="truncate">
                <li>
                  Native Name: <span>{flatNative(nativeName)}</span>{" "}
                </li>
                <li>
                  Population: <span>{formatNum(population)}</span>
                </li>
                <li>
                  Region: <span>{region}</span>
                </li>
                <li>
                  Sub Region: <span>{subregion}</span>
                </li>
                <li>
                  Capital: <span>{capital}</span>
                </li>
              </ul>
              <ul>
                <li>
                  Top Level Domain: <span>{tld}</span>
                </li>
                <li>
                  Currencies: <span>{flatCurr(currencies)}</span>
                </li>
                <li>
                  Languages: <span>{addComma(languages)}</span>
                </li>
              </ul>
            </div>
            <div className="border ">
              <p>Border Countries: {!border && "No border"}</p>
              <ul className="">
                {border
                  ? border.map((list) => (
                      <li className="truncate" key={list.cca3}>
                        <Link to={`/country/${list.name.common}`}>
                          {" "}
                          {list.name.common}
                        </Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCountry;
