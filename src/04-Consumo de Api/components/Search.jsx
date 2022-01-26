import { React, useState } from "react";
import { useEffect } from "react";
const axios = require("axios");
const API_KEY = "25429544-c8c9eb5d0b1ad0c7612e529d6"
// const { API_KEY } = process.env;

const Search = () => {
  const getPixabay = async (payload) => {
    const apiUrl = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${payload}`);
    console.log(API_KEY, "API_KEY");
    console.log(apiUrl, "apiUrl");
    



  };
  useEffect(() => {
    
  }, []);

  const [search, setSearch] = useState("");
 

  const handleSearch = (e) => {
    e.preventDefault();
    getPixabay(search)
   
  };


  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)} >
      <input
          type="search"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>
    </div>
  );
};

export default Search;
