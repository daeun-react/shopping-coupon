import React from "react";
import styled from "styled-components";
import { useCartState } from "contexts/cart/CartContext";

const CartCounter = () => {
  const { cart } = useCartState();
  return (
    <CircleWrapper>
      <span>{cart.length}</span>
    </CircleWrapper>
  );
};

export default CartCounter;

const CircleWrapper = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 0.7rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;
