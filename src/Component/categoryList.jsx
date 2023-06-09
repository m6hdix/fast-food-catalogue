import axios from "../Helper/Request";
import React, { useEffect, useState, useCallback, useMemo } from "react";

const CategoryList = React.memo(({ filterItems, searchFood }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  const handleFilterItems = useCallback(
    (id) => {
      filterItems(id);
    },
    [filterItems]
  );

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

  const renderedCategories = useMemo(
    () =>
      categories.map((category) => (
        <span
          className="cursor-pointer"
          key={category.id}
          onClick={() => handleFilterItems(category.id)}
          aria-label={category.name}
        >
          {category.name}
        </span>
      )),
    [categories, handleFilterItems]
  );

  const handelSearch = useCallback(
    (e) => {
      setValue(e.target.value);
      searchFood(e.target.value);
    },
    [searchFood]
  );

  return (
    <div
      className={`bg-white container rounded-md flex-wrap md:flex-nowrap p-2 flex items-center ${
        loading ? "justify-center" : "justify-around"
      } w-11/12 lg:w-full relative -top-4 mx-auto gap-5 font-semibold`}
    >
      {loading ? (
        <span className="loading loading-dots loading-lg text-indigo-500"></span>
      ) : (
        <>
          <div className="flex gap-5 items-center flex-wrap ">
            <span
              className="cursor-pointer"
              onClick={() => handleFilterItems()}
              aria-label="همه فست فود ها"
            >
              همه فست فود ها
            </span>
            {renderedCategories}
          </div>

          <div className="join flex-row-reverse justify-self-end shadow-xl h-10 border w-full md:w-1/2 ">
            <div className="w-full">
              <div className="w-full">
                <input
                  className="input join-item focus:outline-none h-10 w-full bg-slate-100"
                  placeholder=" جستجو میان فست فود ها"
                  value={value}
                  onChange={(e) => handelSearch(e)}
                />
              </div>
            </div>

            <div className="indicator">
              <button className="btn join-item h-10 min-h-full">
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
