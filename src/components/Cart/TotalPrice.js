import React from "react";
import styled from "styled-components";
import { useCartState } from "contexts/cart/CartContext";

function TotalPrice() {
  const { cart, coupon } = useCartState();

  const getTotalPrice = () => {
    const totalPrice = cart
      .filter((item) => item.checked)
      .reduce((acc, cur) => (acc += cur.count * cur.price), 0);
    return isNaN(totalPrice) ? 0 : Math.floor(totalPrice);
  };

  const getDiscountPrice = () => {
    if (!cart || !coupon) return 0;

    const discount =
      coupon.type === "rate"
        ? cart
            .filter((item) => item.checked && item.availableCoupon)
            .reduce((acc, cur) => (acc += (cur.count * cur.price * coupon.discountRate) / 100), 0)
        : coupon.discountAmount;

    return isNaN(discount) ? 0 : Math.floor(discount);
  };

  const getPaymentPrice = () => {
    return getTotalPrice() - getDiscountPrice();
  };

  return (
    <Wrapper>
      <Box>
        <Head>제품금액</Head>
        <Price>{getTotalPrice().toLocaleString()}</Price>
      </Box>
      <Box>
        <Sign>-</Sign>
      </Box>
      <Box>
        <Head>할인금액</Head>
        <Price>{getDiscountPrice().toLocaleString()}</Price>
      </Box>
      <Box>
        <Sign>=</Sign>
      </Box>
      <Box>
        <Head>주문 합계금액</Head>
        <Price color="blue">{getPaymentPrice().toLocaleString()}</Price>
      </Box>
      <Box>
        <OrderButton>결제하기</OrderButton>
      </Box>
    </Wrapper>
  );
}

export default TotalPrice;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const Box = styled.div`
  text-align: center;
`;

const Head = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem;
`;

const Sign = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ color, theme }) => color && theme.colors[color]};

  &::after {
    content: " 원";
    font-size: 2rem;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
