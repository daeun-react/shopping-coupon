import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import CartCounter from "components/Cart/CartCounter";
import { useCartState } from "contexts/cart/CartContext";
import { ROUTES } from "utils/constants";
import { ReactComponent as CartIcon } from "assets/svg/cart.svg";

function Header() {
  const { HOME, CART } = ROUTES;
  const { cart } = useCartState();
  const history = useHistory();

  const CartClick = (e) => {
    e.preventDefault();
    cart.length > 0 ? history.push(CART) : alert("장바구니에 등록해주세요");
  };

  return (
    <HeaderMain>
      <HeaderWrapper>
        <Link to={HOME}>
          <h1>SHOPPING & COUPON</h1>
        </Link>
        <Link to={CART} onClick={CartClick}>
          <CartWrapper>
            <CartIcon />
            {cart.length > 0 && <CartCounter count={cart.length} />}
          </CartWrapper>
        </Link>
      </HeaderWrapper>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 5rem;
  margin: 0 auto;

  h1 {
    font-weight: 600;
  }
`;

const CartWrapper = styled.div`
  position: relative;
`;
