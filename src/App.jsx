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
    <div className="w-full  bg-slate-400  max-h-max ">
      <Header />
      <CategoryList />
      <div className="grid col-span-1 lg:grid-cols-3 gap-4 p-8">
        {loading ? (
          <p>Loading...</p>
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
