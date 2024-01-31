import React from "react";
import icon from "../assets/search-interface-symbol.png";
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
  return (
    <div style={{display:"flex", width: "90%", margin: "auto",    border: "1px solid grey",
    borderRadius:"10px",alignItems:"center", gap:"10px" }}>
       <FaSearch style={{ width: "40px", height:"20px", color: "white" }} />

      <input
        style={{
          height: "40px",
          width: "100%",
         
          backgroundColor: "black",
          fontSize:"13px",
        }}
        type="text"
        placeholder="Search in Sour House"
      />
    </div>
  );
};

export default SearchBar;
