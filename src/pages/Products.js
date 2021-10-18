import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "components/Carousel/Carousel";

function Products() {
  const BASE_URL = "/data/productItems.json";
  const COUNT = 5;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.productItems.sort((a, b) => b.score - a.score);
        setProducts(sorted);
      });
  }, []);

  return (
    <Wrapper>
      <Carousel products={products} count={COUNT} />
    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
