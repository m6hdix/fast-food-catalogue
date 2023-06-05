import React, { useState, useEffect, useCallback, useMemo } from "react";
import CategoryList from "./Component/categoryList";
import Header from "./Component/header";
import axios from "./Helper/Request";
import ProductCart from "./Component/ProductCart";

const App = () => {
  const [fastFoods, setFastFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (categoryId = null) => {
    try {
      const url = `/FastFood/list${
        categoryId ? `?categoryId=${categoryId}` : ""
      }`;
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filterItems = async (categoryId) => {
    setLoading(true);
    const data = await fetchData(categoryId);
    setFastFoods(data);
    setLoading(false);
  };

  const searchFood = async (term) => {
    setLoading(true);
    const url = `/FastFood/search/${term ? `?term=${term}` : ""}`;
    const response = await axios.get(url);
    const data = await response.data;
    setFastFoods(data);
    setLoading(false);
  };

  useEffect(() => {
    const promises = [fetchData()];
    Promise.all(promises).then((data) => {
      setFastFoods(data[0]);
      setLoading(false);
    });
  }, []);

  const productList = useMemo(() => {
    return loading
      ? null
      : fastFoods.map((product) => (
          <ProductCart key={product.id} fastFood={product} />
        ));
  }, [fastFoods, loading]);

  return (
    <div className={`w-full bg-slate-400 min-h-screen transition-transform `}>
      <Header />
      <CategoryList filterItems={filterItems} searchFood={searchFood} />
      <div
        className={`${
          loading
            ? "flex w-full items-center justify-center "
            : "grid col-span-1 lg:grid-cols-3 gap-4 p-8  fade-in"
        }`}
      >
        {loading ? (
          <span className="loading loading-dots loading-lg text-indigo-500"></span>
        ) : (
          productList
        )}
      </div>
    </div>
  );
};

export default App;
