// @flow

import React from "react";
import { Container, Headline, Copy } from "./style";

const App = () =>
  <Container>
    <Headline fontSize={6} my={2}>
      Application
    </Headline>
    <Copy fontSize={3} my={1}>
      Lorem ipsum dolor sit amet, consectetur adipisicing.
    </Copy>
  </Container>;

export default App;
