import React from "react";

const ProductCart = ({ fastFood }) => {
  console.log(fastFood);
  return (
    <div className="card card-side bg-base-100 shadow-xl h-56 ">
      <img className="aspect-square w-40 object-cover" src={fastFood?.imageUrl} alt="" />
      <div className="card-body">
        <h2 className="card-title">{fastFood?.name}</h2>
        <p>{fastFood?.ingredients}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary h-10 min-h-0  ">{fastFood?.price} تومان </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
