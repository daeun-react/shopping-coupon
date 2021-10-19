import React from "react";
import styled from "styled-components";
import CartTable from "components/Cart/CartTable";
import CouponSelect from "components/Cart/CouponSelect";
import TotalPrice from "components/Cart/TotalPrice";

function Cart() {
  return (
    <Wrapper>
      <CartTable />
      <CouponSelect />
      <TotalPrice />
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;
