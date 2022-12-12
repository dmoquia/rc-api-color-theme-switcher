import React, { useContext } from "react";
import CountryList from "../components/CountryList";

import SearchForm from "../components/SearchForm";
import Context from "../context/context";
const Home = () => {
  const { countries, searchTerm, loading, setSearchTerm } = useContext(Context);

  return (
    <main style={{ backgroung: `${loading ? "" : "white"}` }}>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CountryList loading={loading} countries={countries} />
    </main>
  );
};

export default Home;
