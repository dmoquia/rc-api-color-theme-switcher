import React, { useEffect, useState } from "react";
import Context from "./context";

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    (async function getCountryByName() {
      setLoading(true);

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${searchTerm}`
        );
        const data = await res.json();

        if (data) {
          const newCountries = data?.map((country) => {
            const {
              name: { common },
              flags: { png },
              population,
              region,
              capital,
              ccn3,
            } = country;
            return { common, png, population, region, capital, ccn3 };
          });
          setCountries(newCountries);
          setLoading(false);
        } else {
          setCountries([]);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchTerm]);

  useEffect(() => {
    (async function getAllCountries() {
      setLoading(true);
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        // console.log(data);
        if (data) {
          const newCountries = data?.map((country) => {
            const {
              name: { common },
              flags: { png },
              population,
              region,
              capital,
              ccn3,
            } = country;
            return { common, png, population, region, capital, ccn3 };
          });
          setCountries(newCountries);
        } else {
          setCountries([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);

  const options = (region) => {
    setCountries(region);
  };

  const toggleTheme = (prop) => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <Context.Provider
      value={{
        countries,
        loading,
        searchTerm,
        theme,
        setSearchTerm,
        options,
        setLoading,
        toggleTheme,
      }}
    >
      <div id={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
