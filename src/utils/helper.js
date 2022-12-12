export const addComma = (str) => {
  return Object.values(str)
    .filter((item) => item.trim().length > 0)
    .join(",  ")
    .concat(".");
};
// export const iterate = async (...str) => {
//   if (str !== undefined) {
//     const res = await fetch(
//       `https://restcountries.com/v3.1/alpha?codes=${str}`
//     );
//     const data = await res.json();

//     if (data) {
//       return data.filter((item) => <li>{item && item.name.common}</li>);
//     }
//   }
// };

// export function addComma(str) {
//   return str?.map((char, i) => {
//     return (
//       <span key={i} style={{ display: "inline" }}>
//         {/* {char} {i < str.length - 1 ? "," : "."} */}
//         {i < str.length - 1 ? char.concat(",") : char.concat(".")}
//       </span>
//     );
//   });
// }

export const flatNative = (str) => {
  return Object.values(str).map((item) => (item ? item.common : null));
};

export const flatCurr = (prop) => {
  return Object.values(prop).map((item) => (item ? item.name : null));
};

export const flatLang = (prop) => {
  return Object.values(prop).filter((item) => (item ? item : null));
};

export const formatNum = (n) => {
  const result = Intl.NumberFormat("en-US");
  return result.format(n);
};

export function filterUnique(value) {
  console.log([value]);
  const uniq = [...new Set(value)];

  return uniq;
}
