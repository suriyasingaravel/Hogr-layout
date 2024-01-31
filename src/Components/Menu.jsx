import React from "react";
import like from "../assets/opinion.png"

const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        margin: "auto",
        marginTop: "20px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "70px",
            objectFit: "cover",
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "10px",
          }}
        //   src="https://www.quikclicks.com.au/wp-content/uploads/social.png"
        src={like}
          alt=""
        />
        <p style={{ marginTop: "5px" }}>Reco</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "70px",
            objectFit: "cover",
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "10px",
          }}
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Ff2f12a6676701e3f41b407374b57a1b0.cdn.bubble.io%2Ff1703181347672x119092927557653330%2Fdish_703284.png?w=96&h=96&auto=compress&dpr=1.5&fit=max"
          alt=""
        />
        <p style={{ marginTop: "5px" }}>Menu</p>
      </div>
    </div>
  );
};

export default Menu;
