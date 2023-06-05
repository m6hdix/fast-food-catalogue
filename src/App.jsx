import { useState, useEffect } from "react";
import CategoryList from "./Component/categoryList";
import Header from "./Component/header";
import axios from "./Helper/Request";
import ProductCart from "./Component/ProductCart";

function App() {
  const [fastFoods, setFastFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/FastFood/list");
        const data = await response.data;
        setFastFoods(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`w-full  bg-slate-400  ${loading ? "h-screen" : "max-h-max"}`}
    >
      <Header />
      <CategoryList />
      <div
        className={` ${
          loading
            ? "flex w-full items-center justify-center"
            : "grid col-span-1 lg:grid-cols-3 gap-4 p-8"
        }`}
      >
        {loading ? (
          <span className="loading loading-dots loading-lg text-indigo-500"></span>
        ) : (
          fastFoods.map((product) => (
            <ProductCart key={product.id} fastFood={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
