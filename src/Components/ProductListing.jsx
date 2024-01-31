import React, { useEffect, useState } from "react";
import "../css/ProductListing.css";
import ProductCard from "./ProductCard";
import { Button } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import veg  from "../assets/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg - Copy.png";
import nonveg  from "../assets/download - Copy.png";


let products = [
    {
        "id": 1,
        "title": "Focaccia",
        "price": 124,
        "category": "Breads",
        "type": "Veg",
        "description": "Italian flatbread made from a base similar to pizza dough that can be either sweet or savoury. The dough of focaccia is flavoured with olive oil and sometimes topped with herbs, vegetables and other ingredients like raisins or olives."
    },
    {
        "id": 2,
        "title": "Baguette",
        "price": 99,
        "category": "Breads",
        "type": "Veg",
        "description": "A long, thin loaf of French bread with a crisp crust and chewy interior, ideal for sandwiches or serving with soup."
    },
    {
        "id": 3,
        "title": "Croissant",
        "price": 79,
        "category": "Breads",
        "type": "Non-Veg",
        "description": "A buttery, flaky, crescent-shaped pastry, typically enjoyed for breakfast or as a snack."
    },
    {
        "id": 4,
        "title": "Chocolate Croissant",
        "price": 89,
        "category": "Pastry",
        "type": "Veg",
        "description": "A croissant filled with rich chocolate, offering a delightful combination of flakiness and sweetness."
    },
    {
        "id": 5,
        "title": "Apple Danish",
        "price": 109,
        "category": "Pastry",
        "type": "Veg",
        "description": "A Danish pastry filled with sweet apple filling, perfect for a morning treat or dessert."
    },
    {
        "id": 6,
        "title": "Grilled Cheese Sandwich",
        "price": 149,
        "category": "Toasties and Sandwiches",
        "type": "Veg",
        "description": "A classic comfort food made with melted cheese between slices of toasted bread."
    },
    {
        "id": 7,
        "title": "Turkey Club Sandwich",
        "price": 169,
        "category": "Toasties and Sandwiches",
        "type": "Non-Veg",
        "description": "A triple-decker sandwich with layers of sliced turkey, bacon, lettuce, tomato, and mayonnaise."
    },
    {
        "id": 8,
        "title": "Gingerbread Cookies",
        "price": 49,
        "category": "Christmas Specials",
        "type": "Veg",
        "description": "Delicious cookies flavored with ginger, cinnamon, nutmeg, and cloves, perfect for the holiday season."
    },
    {
        "id": 9,
        "title": "Yule Log Cake",
        "price": 199,
        "category": "Christmas Specials",
        "type": "Non-Veg",
        "description": "A festive dessert made of rolled sponge cake filled with cream and decorated to resemble a log."
    },
    {
        "id": 10,
        "title": "Cappuccino",
        "price": 89,
        "category": "Drinks",
        "type": "Non-Veg",
        "description": "Espresso combined with steamed milk foam, topped with a dusting of cocoa powder or cinnamon."
    },
    {
        "id": 11,
        "title": "Iced Tea",
        "price": 69,
        "category": "Drinks",
        "type": "Veg",
        "description": "Chilled tea served over ice, available in a variety of flavors including lemon, peach, and raspberry."
    },
    {
        "id": 12,
        "title": "Potato Chips",
        "price": 29,
        "category": "Snacks",
        "type": "Veg",
        "description": "Thin slices of potato fried until crisp and seasoned with salt, perfect for snacking."
    },
    {
        "id": 13,
        "title": "Mixed Nuts",
        "price": 79,
        "category": "Snacks",
        "type": "Veg",
        "description": "A blend of roasted nuts, including almonds, cashews, walnuts, and pecans, offering a satisfying crunch."
    }
     
]

const ProductListing = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:8080/products`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProducts(data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

  let breads = products.filter((product) => {
    return product.category === "Breads";
  });

  let pasteries = products.filter((product) => {
    return product.category === "Pastry";
  });

  let toasties = products.filter((product) => {
    return product.category === "Toasties and Sandwiches";
  });

  let christmas = products.filter((product) => {
    return product.category === "Christmas Specials";
  });

  let drinks = products.filter((product) => {
    return product.category === "Drinks";
  });

  let snacks = products.filter((product) => {
    return product.category === "Snacks";
  });

  return (
    <div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          marginLeft: "20px",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "5px",
          }}
          className="veg-button"
        >
         
          <img
            style={{ width: "20px", objectFit: "cover" }}
            src={veg}
            alt=""
          />
          Veg
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "5px",
            width:"130px"
          }}
          className="non-veg-button"
        >
             <img
            style={{ width: "20px", objectFit: "cover" }}
            src={nonveg}
            alt=""
          />
          Non Veg
        </button>
      </div>
      {/* <Button style={{marginTop:"20px"}} colorScheme='lightgrey' variant='outline' > Breads ({products.length}) </Button> */}

      {/* <div style={{marginTop:"30px"}}>
      <button
        style={{
          border: "1px solid grey",
          height:"40px",
          width:"130px",
          borderRadius: "10px",
          margin:"10px"
        }}
      >
        Breads ({breads.length})
      </button>
      {breads && breads.length > 0 && 
        breads.map((el) => <ProductCard {...el} key={el.id} />)}


     </div>  */}

      <CategoryCard breads={breads} />
      <CategoryCard breads={pasteries} />
      <CategoryCard breads={toasties} />
      <CategoryCard breads={christmas} />
      <CategoryCard breads={drinks} />
      <CategoryCard breads={snacks} />
    </div>
  );
};

export default ProductListing;
