import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const CategoryCard = ({ breads }) => {
    const [isHidden, setIsHidden] = useState(false);
    const cat = breads[0]?.category;

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div style={{ width:"90%", margin:"auto", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent:"space-between", alignItems: "center", marginLeft:"20px", marginRight:"20px" }}>
                <button
                    style={{
                        border: "1px solid grey",
                        height: "50px",
                        width: "160px",
                        borderRadius: "10px",
                        // margin: "10px"
                    }}
                    onClick={toggleVisibility}
                >
                    {cat} ({breads.length})
                </button>
                {isHidden ? <IoIosArrowUp  onClick={toggleVisibility} /> : <IoIosArrowDown onClick={toggleVisibility} />}
            </div>
            {!isHidden && breads && breads.length > 0 &&
                breads.map((el) => <ProductCard {...el} key={el.id} />)
            }
        </div>
    );
}

export default CategoryCard;
