import React from "react";

const ProductCart = ({ fastFood }) => {
    console.log(fastFood)
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="aspect-square w-28" src={fastFood?.imageUrl} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fastFood?.name}</h2>
        <p>{fastFood?.ingredients}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{fastFood?.price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
