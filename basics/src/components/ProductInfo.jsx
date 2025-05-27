import React from "react";

const product = {
  name: "Adarsh",
  price: 100,
  age: 19,
};
const ProductInfo = () => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product.age}</h1>
    </div>
  );
};

export default ProductInfo;
