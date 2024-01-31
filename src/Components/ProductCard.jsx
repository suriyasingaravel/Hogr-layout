import React, { useState } from "react";
import { CardModal } from "./CardModal";
import veg  from "../assets/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg - Copy.png";
import nonveg  from "../assets/download - Copy.png";

const ProductCard = ({ title, price, category, type, description, id }) => {
  const [showModal, setShowModal] = useState(false);
  

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</h1>
      <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {type === "Veg" ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "5px",
                  width: "130px",
                }}
              >
                   <img
            style={{ width: "20px", objectFit: "cover" }}
            src={veg}
            alt=""
          />
              
                Price: ₹{price}
              </p>
            ) : (
              <p   style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "5px",
              }}>   <img
              style={{ width: "20px", objectFit: "cover" }}
              src={nonveg}
              alt=""
            /> Price: ₹{price}</p>
            )}
        <button
          style={{
            border: "1px solid grey",
            width: "80px",
            height: "40px",
            borderRadius: "10px",
          }}
        >
          Add
        </button>
      </div>
      {/* <button onClick={toggleModal} style={{ border: "1px solid grey", width: "140px", height: "40px", borderRadius: "10px", marginBottom: "10px" }}>More Details > </button> */}
      <CardModal
        title={title}
        price={price}
        type={type}
        description={description}
      />

      <hr
        style={{ marginTop: "10px", marginBottom: "10px", color: "lightgrey" }}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>{title}</h2>
            {type=== "veg" ?    <p>Price:  ₹{price}</p> :    <p>Price: ₹{price}</p> }
         
            <p>Description: {description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
