import React from "react";
import styled from "styled-components";

function Title({ text }) {
  return <H2>{text}</H2>;
}

const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export default Title;
