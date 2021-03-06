import { React, useState } from "react";

import Card from "./Card";
import "./styles/styles.css";

const axios = require("axios");
const API_KEY = "25429544-c8c9eb5d0b1ad0c7612e529d6";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getPixabay = async (payload) => {
    const apiUrl = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${payload}`
    );

    setData(apiUrl.data.hits);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getPixabay(search);
  };

  return (
    <div>
      <div>
      {/* <img   className="imgnavbar" src={pixa}alt="pixa" height="550px" width="700px" /> */}
         
        <form className="navbar_search" onSubmit={(e) => handleSearch(e)}>
          <input
          className="input"
            type="search"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="button" type="submit">Search</button>
        </form>
        <div className="cards">
          {data.length > 0 ? (
            data.map((po) => {
              return (
                <Card
                  image={po.webformatURL}
                  views={po.views}
                  likes={po.likes}
                  comments={po.comments}
                  downloads={po.downloads}
                />
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
      );
    </div>
  );
};

export default Navbar;
