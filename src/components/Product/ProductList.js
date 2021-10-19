import React, { useEffect } from "react";
import styled from "styled-components";
import ProductItem from "components/Product/ProductItem";
import { cacheImages } from "utils/cacheImages";

function ProductList({ currentIndex, products }) {
  useEffect(() => {
    const imgs = products.map((item) => item.coverImage);
    cacheImages(imgs);
  }, [products]);

  return (
    <Wrapper>
      {products.map(({ id, title, coverImage, price, score, availableCoupon, count }, idx) => (
        <ProductItem
          key={id}
          id={id}
          title={title}
          coverImage={coverImage}
          price={price}
          score={score}
          availableCoupon={availableCoupon}
          count={count}
          show={idx >= currentIndex && idx < currentIndex + 5}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 3rem 1rem;
  margin: 1rem 2rem;
  overflow: hidden;

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductList;
