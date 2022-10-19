import parse from "html-react-parser";

export function stringToHtml(string) {
  return parse(string);
}
