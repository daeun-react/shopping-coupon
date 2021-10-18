import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CartIcon } from "assets/svg/cart.svg";

function ProductItem({
  id,
  title,
  coverImage,
  price,
  score,
  availableCoupon = true,
  count = 1,
  show,
}) {
  const [pick, setPick] = useState(false);

  return (
    <Wrapper id={id} show={show}>
      <ImageContainer>
        {availableCoupon && <CouponBadge>할인 쿠폰</CouponBadge>}
        <Image src={coverImage} alt={title} />
        <CartBadge pick={pick}>
          <CartIcon />
        </CartBadge>
      </ImageContainer>
      <ProductInfoContainer>
        <div className="title">{title}</div>
        <div className="score">{score}</div>
        <div className="price">{price.toLocaleString()}</div>
      </ProductInfoContainer>
    </Wrapper>
  );
}

export default ProductItem;

const Wrapper = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CouponBadge = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  z-index: 99;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.3rem;
  transition: transform 0.3s ease;
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }
`;

const CartBadge = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ pick, theme }) => (pick ? theme.colors.red : theme.colors.black)};
  opacity: ${({ pick }) => (pick ? 1 : 0.2)};
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.2rem;
    height: 1.2rem;
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ pick, theme }) => (pick ? theme.colors.black : theme.colors.red)};
    opacity: ${({ pick }) => (pick ? 0.2 : 1)};
  }
`;

const ProductInfoContainer = styled.div`
  .title {
    height: 3rem;
    margin: 0.4rem auto;
    line-height: 1.2rem;
    color: ${({ theme }) => theme.colors.black};
    font-size: 0.8rem;
  }

  .score {
    &::before {
      content: "♥ ";
    }
    margin: 1rem auto;
    padding: 0.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.8rem;
  }

  .price {
    &::before {
      content: "₩ ";
    }
    &::after {
      content: " 원";
    }
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
  }
`;
