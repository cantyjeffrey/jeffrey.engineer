import { fontFace } from "polished";
import { injectGlobal } from "styled-components";

const PUBLIC_URL = process.env.PUBLIC_URL;
const fonts = [
  {
    family: "SequelSans",
    path: `${PUBLIC_URL}/fonts/SequelSans-BoldHeadline`,
    formats: ["woff2", "woff", "ttf", "eot", "svg"],
    weight: 600
  }
];

fonts.map(
  ({ family, path, formats, weight }) =>
    injectGlobal`${fontFace({
      fontFamily: family,
      fontFilePath: path,
      fileFormats: formats,
      fontWeight: weight
    })}`
);
