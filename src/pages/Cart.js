import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CartTable from "components/Cart/CartTable";
import CouponSelect from "components/Cart/CouponSelect";
import TotalPrice from "components/Cart/TotalPrice";
import Title from "components/Common/Title";
import { useCartState } from "contexts/cart/CartContext";
import { ROUTES } from "utils/constants";

function Cart() {
  const { HOME } = ROUTES;
  const { cart } = useCartState();
  const history = useHistory();

  useEffect(() => {
    cart.length <= 0 && history.push(HOME);
  }, [HOME, cart, history]);

  return (
    <Wrapper>
      <Title text="장바구니 리스트" />
      <CartTable />
      <Title text="쿠폰 적용 및 결제" />
      <CouponSelect />
      <TotalPrice />
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  margin: 2rem auto;
`;
