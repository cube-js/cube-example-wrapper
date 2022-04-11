import headerTemplate from "../components/header";
import footerTemplate from "../components/footer";
import descriptionTemplate from "../components/description";

const documentBody = document.querySelector("body");

const parseHTML = (html) => {
  const parser = new DOMParser();
  const htmlRaw = parser.parseFromString(html, "text/html");
  return htmlRaw.body.firstChild;
};

class CubeExampleWrapper {
  #description = {
    title: "Cube Example",
    text: "This demo shows Cube app example",
    tutorialLabel: "tutorial",
    tutorialSrc: "#",
    sourceCodeSrc: "#",
  };
  #root;

  constructor(description) {
    this.#description = description;
  }

  #renderHeader = () =>
    documentBody.insertBefore(parseHTML(headerTemplate), this.#root);

  #renderDescription = () => {
    const { title, text, tutorialLabel, tutorialSrc, sourceCodeSrc } =
      this.#description;
    documentBody.insertBefore(parseHTML(descriptionTemplate), this.#root);
    document.querySelector(".Description__title").innerHTML = title;
    document.querySelector(".Description__text").innerHTML = text;
    document.querySelector(".Description__tutorial").innerHTML = tutorialLabel;
    document.querySelector(".Description__tutorial").href = tutorialSrc;
    document.querySelector(".Description__sourceCode").href = sourceCodeSrc;
  };

  #renderFooter = () =>
    documentBody.insertBefore(
      parseHTML(footerTemplate),
      this.#root.nextSibling
    );

  render = (root) => {
    this.#root = root;
    this.#renderHeader();
    this.#renderDescription();
    this.#renderFooter();
  };
}

export default CubeExampleWrapper;
