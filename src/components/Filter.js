import React from "react";
import M from "materialize-css";
import Context from "../context/context";
const Filter = () => {
  const { setLoading, options } = React.useContext(Context);
  const [option, setOption] = React.useState([]);
  const [select, setSelect] = React.useState([]);

  const filted = select?.map((item) => item.region);

  // it's time to combine these array
  let flatArray = filted.reduce((acc, curVal) => {
    return acc.concat(curVal);
  }, []);

  // this code will remove duplicate
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  // lets filter unique values
  const unique = flatArray.filter(onlyUnique);

  React.useEffect(() => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
    fetch(`https://restcountries.com/v3.1/all`)
      .then((data) => data.json())
      .then((res) => setSelect(res));
  }, [options]);

  React.useEffect(() => {
    (async function () {
      setLoading(true);

      try {
        if (option) {
          const res = await fetch(
            `https://restcountries.com/v3.1/region/${option}`,
            { mode: "cors" }
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
            options(newCountries);
          } else {
            options([]);
          }
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  return (
    <div className="input-field col s12">
      <select onChange={(e) => setOption(e.target.value)} value={option || []}>
        <option value="">Filter By Region</option>

        {unique.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
