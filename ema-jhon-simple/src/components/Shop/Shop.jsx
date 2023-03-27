import React, { useEffect, useState } from "react";
import "./Shop.css";
const Shop = () => {
  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>Product coming hare : {product.length}</h2>
      </div>
      <div className="cart-container">
        <h4>Oder Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
