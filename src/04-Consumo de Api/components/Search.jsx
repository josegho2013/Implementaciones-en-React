// import { React, useState } from "react";
// import { useEffect } from "react";
// import Card from "./Card";
// import "./styles/styles.css"
// const axios = require("axios");
// const API_KEY = "25429544-c8c9eb5d0b1ad0c7612e529d6";


// const Search = () => {
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState([]);

//   const getPixabay = async (payload) => {
//     const apiUrl = await axios.get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${payload}`
//     );

//     setData(apiUrl.data.hits);
//   };
 
//   // useEffect(() => {}, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     getPixabay(search);
//   };

//   return (
//     <div>
//       <div>
//         {data.length > 0 ? (
//           data.map((po) => {
//             return (
//               <Card
//                 image={po.webformatURL}
//                 views={po.views}
//                 likes={po.likes}
//                 comments={po.comments}
//                 downloads={po.downloads}
//               />
//             );
//           })
//         ) : (
//           <div></div>
//         )}
//       </div>
//       <form className="navbar_search" onSubmit={(e) => handleSearch(e)}>
//         <input
//           type="search"
//           placeholder="search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default Search;
