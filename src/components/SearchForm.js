import React from "react";
import Filter from "./Filter";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="container section-search">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">search your country</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
      <Filter />
    </section>
  );
}
