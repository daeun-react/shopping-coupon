import React from "react";
import styled from "styled-components";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";

function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
