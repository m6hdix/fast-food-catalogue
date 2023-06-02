import axios from "../Helper/Request";
import React, { useEffect, useState } from "react";

const CategoryList = React.memo(() => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/FoodCategory/categories");
        const data = await response.data;
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={` bg-white container rounded-md  p-2 flex items-center ${
        loading ? "justify-center" : "justify-start"
      }  h-12 w-11/12 lg:w-full relative -top-4 mx-auto gap-5  font-semibold`}
    >
      {loading ? (
        <span className="loading loading-dots loading-lg text-indigo-500"></span>
      ) : (
        <>
          <span className="cursor-pointer"> همه فست فود ها</span>
          {categories.length > 0 &&
            categories.map((category) => (
              <span className="cursor-pointer" key={category.id}>
                {category.name}
              </span>
            ))}
          <div className="join flex-row-reverse justify-self-end  " >
            <div>
              <div>
                <input className="input join-item" placeholder=" جستجو میان فست فود ها" />
              </div>
            </div>

            <div className="indicator">
              <button className="btn join-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default CategoryList;
