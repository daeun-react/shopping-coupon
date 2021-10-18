import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterMain>
      <FooterWrapper>Daeun.lee</FooterWrapper>
    </FooterMain>
  );
}

export default Footer;

const FooterMain = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 5rem;
  margin: 0 auto;
`;
