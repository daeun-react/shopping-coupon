import React, { useState } from "react";
import styled from "styled-components";
import ProductList from "components/Product/ProductList";

const Carousel = ({ products, count = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const IsPrevDisabled = currentIndex === 0;
  const IsNextDisabled = currentIndex + count === products.length;

  const handlePrevClick = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((cur) => cur - 1);
  };
  const handleNextClick = () => {
    if (currentIndex + count === products.length) return;
    setCurrentIndex((cur) => cur + 1);
  };

  return (
    <Wrapper>
      <PrevButton onClick={handlePrevClick} disabled={IsPrevDisabled}>
        &laquo;
      </PrevButton>
      <ProductList currentIndex={currentIndex} products={products} />
      <NextButton onClick={handleNextClick} disabled={IsNextDisabled}>
        &raquo;
      </NextButton>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const Button = styled.button`
  position: absolute;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 4em;
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  z-index: 99;

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;
