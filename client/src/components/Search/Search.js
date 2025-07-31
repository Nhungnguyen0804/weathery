import "./Search.css";
import Button from "../Button/Button";
import { SearchIcon } from "../Icon/Icon";
import { useState } from "react";

import { useCurrentCountry } from "../../context/CountryContext";
import {
  listCountryArray,
  findCountryKeyFromSearch,
} from "../../assets/data/country";
function Search({ placeholder }) {
  const [inputValue, setInputValue] = useState("");
  const { currentCountry, setCurrentCountry } = useCurrentCountry();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // update current country global
    // khi valueinput (Viet Nam) != vs current value (chữ thường)
    // currentCountry : Vietnam -> key
    const countryKeywordSearched = findCountryKeyFromSearch(inputValue);
    if (countryKeywordSearched) {
      if (countryKeywordSearched !== currentCountry)
        setCurrentCountry(countryKeywordSearched);
    } else {
      alert("Không tìm thấy!");
    }
  };

  return (
    <div className="search-wrapper">
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        list="countries"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <datalist id="countries">
        {listCountryArray.map((country, index) => (
          <option value={country} key={index} />
        ))}
      </datalist>
      <Button type="square" iconLeft={<SearchIcon />} onClick={handleSubmit} />
    </div>
  );
}

export default Search;
