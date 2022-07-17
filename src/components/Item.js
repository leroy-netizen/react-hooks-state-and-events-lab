import { React, useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("");

  const addToCart = (e) => {
    setInCart("in-cart");
    console.log(inCart);
  };
  let cartClass = inCart === "in-cart" ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
