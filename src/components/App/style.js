// @flow

import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 2rem;
`;

export const Headline = styled.h3`
  font-family: 'SequelSans';
  color: rgba(0, 0, 0, .87);
  max-width: 32em;
  ${space} ${width} ${fontSize} ${color};
`;

export const Copy = styled.p`
  color: rgba(0, 0, 0, .54);
  max-width: 32em;
  font-weight: 300;
  ${space} ${width} ${fontSize} ${color};
`;
