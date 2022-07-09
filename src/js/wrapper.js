import headerTemplate from "../components/header.html";
import footerTemplate from "../components/footer.html";
import descriptionTemplate from "../components/description.html";
import popupTemplate from "../components/popup.html";
import Favicon from "../assets/favicon.ico";

import { initNavigationPopup } from "./popup.js";

const documentBody = document.querySelector("body");

const parseHTML = (html) => {
  const parser = new DOMParser();
  const htmlRaw = parser.parseFromString(html, "text/html");
  return htmlRaw.body.firstChild;
};

class Wrapper {
  #description = {};

  constructor(description) {
    const {
      title = "Cube Example",
      text = "This live demo shows a data app built with Cube",
    } = description;

    this.#description.title = title;
    this.#description.text = text;
  }

  #setTitle = () => {
    const title = document.querySelector("title");
    title.innerHTML = `${this.#description.title} | Cube Examples`;
  };

  #setFavicon = () => {
    let favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = Favicon;
    } else {
      favicon = document.createElement("link");
      favicon.rel = "shortcut icon";
      favicon.href = Favicon;
      document.querySelector("head").appendChild(favicon);
    }
  };

  #renderHeader = () => {
    const header = parseHTML(headerTemplate);
    documentBody.insertBefore(
        header,
        documentBody.firstChild
    );
  };

  #renderNavigationPopup = () => {
    const popup = parseHTML(popupTemplate);
    documentBody.appendChild(
        popup,
    );
  };

  #renderExamplesList = async () => {
    const examplesList = documentBody.querySelector(".Popup__examplesList");
    examplesList.appendChild(await initNavigationPopup());
  };

  #renderDescription = () => {
    const { title, text } = this.#description;

    const header = document.querySelector(".Header");
    documentBody.insertBefore(
      parseHTML(descriptionTemplate),
      header.nextSibling
    );

    document.querySelector(".Description__title").innerHTML = title;
    document.querySelector(".Description__text").innerHTML = text;
  };

  #renderFooter = () => documentBody.appendChild(parseHTML(footerTemplate));

  render = () => {
    this.#setTitle();
    this.#setFavicon();
    this.#renderHeader();
    this.#renderDescription();
    this.#renderFooter();
    this.#renderNavigationPopup();
    this.#renderExamplesList();
  };
}

const createExampleWrapper = (description) => {
  try {
    const wrapper = new Wrapper(description);
    wrapper.render();
  } catch (err) {
    throw new Error(err);
  }
};

export default createExampleWrapper;
