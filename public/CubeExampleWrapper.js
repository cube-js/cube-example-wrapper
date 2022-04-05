const documentBody = document.querySelector("body");

import headerTemplate from "./components/header";
import footerTemplate from "./components/footer";
import descriptionTemplate from "./components/description";

const parseHTML = (html) => {
  const parser = new DOMParser();
  const htmlRaw = parser.parseFromString(html, "text/html");
  return htmlRaw.body.firstChild;
};

let CubeExampleWrapper = {};

CubeExampleWrapper.description = {
  title: "Cube Example",
  text: "This demo shows Cube app example",
  tutorialLabel: "tutorial",
  tutorialSrc: "#",
  sourceCodeSrc: "#",
};

CubeExampleWrapper._renderHeader = (root) =>
  documentBody.insertBefore(parseHTML(headerTemplate), root);

CubeExampleWrapper._renderDescription = (root) => {
  const { title, text, tutorialLabel, tutorialSrc, sourceCodeSrc } =
    CubeExampleWrapper.description;
  documentBody.insertBefore(parseHTML(descriptionTemplate), root);
  document.querySelector(".Description__title").innerHTML = title;
  document.querySelector(".Description__text").innerHTML = text;
  document.querySelector(".Description__tutorial").innerHTML = tutorialLabel;
  document.querySelector(".Description__tutorial").href = tutorialSrc;
  document.querySelector(".Description__sourceCode").href = sourceCodeSrc;
};

CubeExampleWrapper._renderFooter = (root) =>
  documentBody.insertBefore(parseHTML(footerTemplate), root.nextSibling);

CubeExampleWrapper.render = function (root) {
  this._renderHeader(root);
  this._renderDescription(root);
  this._renderFooter(root);

  // injectBundle();
};

export default CubeExampleWrapper;
