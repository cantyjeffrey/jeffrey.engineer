// @flow

import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

const pattern = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nNicgaGVpZ2h0PSc2JyBmaWxsPSdibGFjaycgLz4KPC9zdmc+`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(${pattern});
  background-repeat: repeat;
  background-size: 0.5%;
  ${space} ${width} ${fontSize} ${color};
`;

export default {};
