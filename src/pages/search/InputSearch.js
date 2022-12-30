import React, { createContext, useState } from "react";
import { Provider } from "react-redux";

// use Context
export const ThemeContext = createContext();
// console.log(ThemeContext);
const InputSearch = () => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.tartget.value);
  };

  return (
    <ThemeContext.Provider value={keyword}>
      <form action={`/search/${keyword}`}>
        <input type="" name="" onChange={handleChange} />
        <input type="submit" name="" />
      </form>
    </ThemeContext.Provider>
  );
};

export default InputSearch;
