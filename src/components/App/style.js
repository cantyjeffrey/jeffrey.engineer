// @flow

import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Headline = styled.h3`
  font-family: 'SequelSans';
  color: rgba(0, 0, 0, .87);
  ${space} ${width} ${fontSize} ${color};
`;

export const Copy = styled.p`
  color: rgba(0, 0, 0, .54);
  font-weight: 300;
  ${space} ${width} ${fontSize} ${color};
`;
