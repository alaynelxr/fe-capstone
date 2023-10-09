import styled from "styled-components";
import { popularProducts } from "../data";
import { BACKEND_URL } from "../constants";
import FeaturedMovesTile from "./FeaturedMovesTile";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FeaturedMoves = () => {
  const [moveData, setMoveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/moves`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setMoveData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        {moveData.map((item) => (
          <FeaturedMovesTile item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default FeaturedMoves;

// return (
//     <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
//       {productData.map((product) => (
//         <div key={product.id} className="mb-4">
//           {product.title && <h2 className="text-xl mt-2">{product.title}</h2>}
//         </div>
//       ))}
//     </div>
