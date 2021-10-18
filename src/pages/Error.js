import React from "react";
import styled from "styled-components";

function Error() {
  return <Wrapper>잘못된 URL 입니다.</Wrapper>;
}

export default Error;

const Wrapper = styled.div`
  flex-grow: 1;
`;
