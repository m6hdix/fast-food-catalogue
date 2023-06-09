import React from "react";

const ProductCart = ({ fastFood }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl h-60  ">
      <img className="aspect-square w-20 sm:w-2/5 object-cover " src={fastFood?.imageUrl} alt="" />
      <div className="card-body p-4 md:p-6">
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
