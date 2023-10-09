import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";

const TestPage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/moves`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
      {productData.map((product) => (
        <div key={product.id} className="mb-4">
          {product.title && <h2 className="text-xl mt-2">{product.title}</h2>}
        </div>
      ))}
    </div>
  );
};

export default TestPage;
