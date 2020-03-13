import React from "react";

const Total = props => {
  const priceArray = props.additionalPrice.map(a => a.price);
  const addedPrices = priceArray.length
    ? priceArray.reduce((a, b) => a + b)
    : 0;
  return (
    <div className="content">
      <h4>
        Total Amount: ${+props.car.price + +addedPrices}
        {console.log(addedPrices)}
      </h4>
    </div>
  );
};

export default Total;
