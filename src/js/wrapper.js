import headerTemplate from "../components/header.html";
import footerTemplate from "../components/footer.html";
import descriptionTemplate from "../components/description.html";

const documentBody = document.querySelector("body");

const parseHTML = (html) => {
  const parser = new DOMParser();
  const htmlRaw = parser.parseFromString(html, "text/html");
  return htmlRaw.body.firstChild;
};

class Wrapper {
  #description = {
    title: "Cube Example",
    text: "This live demo shows a data app built with Cube",
    tutorialLabel: "tutorial",
    tutorialSrc: "#",
    sourceCodeSrc: "#",
  };

  constructor(description) {
    const {
      title = "Cube Example",
      text = "This live demo shows a data app built with Cube",
      tutorialLabel = "tutorial",
      tutorialSrc = "#",
      sourceCodeSrc = "#",
    } = description;

    this.#description.title = title;
    this.#description.text = text;
    this.#description.tutorialLabel = tutorialLabel;
    this.#description.tutorialSrc = tutorialSrc;
    this.#description.sourceCodeSrc = sourceCodeSrc;
  }

  #renderHeader = () =>
    documentBody.insertBefore(
      parseHTML(headerTemplate),
      documentBody.firstChild
    );

  #renderDescription = () => {
    const { title, text, tutorialLabel, tutorialSrc, sourceCodeSrc } =
      this.#description;
    const header = document.querySelector(".Header");
    documentBody.insertBefore(
      parseHTML(descriptionTemplate),
      header.nextSibling
    );
    document.querySelector(".Description__title").innerHTML = title;
    document.querySelector(".Description__text").innerHTML = text;
    document.querySelector(".Description__tutorial").innerHTML = tutorialLabel;
    document.querySelector(".Description__tutorial").href = tutorialSrc;
    document.querySelector(".Description__sourceCode").href = sourceCodeSrc;
  };

  #renderFooter = () => documentBody.appendChild(parseHTML(footerTemplate));

  render = () => {
    this.#renderHeader();
    this.#renderDescription();
    this.#renderFooter();
  };
}

const createExampleWrapper = (description) => {
  const wrapper = new Wrapper(description);
  wrapper.render();
};

export default createExampleWrapper;
