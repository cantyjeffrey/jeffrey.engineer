// @flow

import React from "react";
import { Container, Headline, Copy } from "./style";

const App = () =>
  <Container>
    <Headline fontSize={6} mb={3}>
      Application
    </Headline>
    <Copy fontSize={3} m={0}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
      facere, eveniet corporis illo itaque aut sunt delectus accusamus voluptate
      error placeat minima nesciunt, fugit quasi maxime repellat dolor eius
      molestiae.
    </Copy>
  </Container>;

export default App;
