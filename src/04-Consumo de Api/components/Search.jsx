import React from "react";
import { useEffect } from "react";
const axios = require("axios");
const { API_KEY } = process.env;

const Search = () => {
  const getPixabay = async () => {
    const apiUrl = await axios.get(`https://pixabay.com/api/?=${API_KEY}`);
    console.log(apiUrl, "apiUrl");
  };


  useEffect(() => {
    getPixabay();
  }, []);

  return (
    <div>
      <h1>hola soy la busqueda</h1>
    </div>
  );
};

export default Search;
