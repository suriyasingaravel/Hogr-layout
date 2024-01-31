
// MidSection.js
import React from 'react';
import "../css/Midsection.css";

const MidSection = () => {
  return (
      <div className="midsection-container">
          <div className="midsection-header">
              <h2 style={{ fontSize: '25px', color:"black", fontWeight:"bold" }}>Sour House</h2>
              <p style={{ color: "#ed008c", fontWeight:"bold" }}>Follow</p>
          </div>
          <div className="midsection-distance">
              <p style={{ color:"black",}}>0km</p>
              <p style={{ color:"black",}}> ↪</p> 
              {/* <img src="" alt="Location Image" /> */}
              <p style={{ color:"black",}}> 39, 8th Main Rd, KHB Block, Ko...</p>
          </div>
          <hr className="dashed" />
          <div className="midsection-button">
              <p style={{ color:"black",}}>Stack HOGR Coins with each yummy recommendation!</p>
              <button style={{ backgroundColor: "#95f406", borderRadius: "10px",border:"1px solid black", color:"black", width:"120px", height:"40px" }} >+Reco</button>
          </div>
      </div>
  );
}

export default MidSection;
