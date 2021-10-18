import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "utils/constants";
import { ReactComponent as CartIcon } from "assets/svg/cart.svg";

function Header() {
  const { HOME, CART } = ROUTES;

  return (
    <HeaderMain>
      <HeaderWrapper>
        <Link to={HOME}>HOME</Link>
        <Link to={CART}>
          <CartIcon />
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
  z-index: 10;
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
`;
