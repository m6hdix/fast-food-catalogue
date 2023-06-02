import axios from "../Helper/Request";
import React, { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/FoodCategory/categories");
        const data = await response.data;
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white container rounded-md  flex items-center justify-center  h-12 w-11/12 lg:w-full relative -top-4 mx-auto gap-5  font-semibold">
      <span className="cursor-pointer"> همه فست فود ها</span>
      {categories.map((category) => (
        <span className="cursor-pointer" key={category.id}>
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default CategoryList;
