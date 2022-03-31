const documentBody = document.querySelector("body");
const root = document.querySelector("#root");

const parseHTML = (html) => {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
};

const fetchComponent = (src, render) =>
  fetch(src)
    .then((res) => res.text())
    .then((html) => {
      const htmlRaw = parseHTML(html);
      render(htmlRaw);
    })
    .catch((err) => console.log(err));

const fetchHeader = () =>
  fetchComponent("./components/header.html", (htmlRaw) => {
    documentBody.insertBefore(htmlRaw.body.firstChild, root);
  });

const fetchDescription = ({ title, text, tutorial, sourceCodeSrc }) =>
  fetchComponent("./components/description.html", (htmlRaw) => {
    documentBody.insertBefore(htmlRaw.body.firstChild, root);
  }).then(() => {
    document.querySelector(".Description__title").innerHTML = title;
    document.querySelector(".Description__text").innerHTML = text;
    document.querySelector(".Description__tutorial").innerHTML = tutorial.label;
    document.querySelector(".Description__tutorial").href = tutorial.src;
    document.querySelector(".Description__sourceCode").href = sourceCodeSrc;
  });

const fetchFooter = () =>
  fetchComponent("./components/footer.html", (htmlRaw) => {
    documentBody.insertBefore(htmlRaw.body.firstChild, root.nextSibling);
  });

const injectScript = (src, t) => {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.src = src;
  document.querySelector(t).appendChild(s);
};

const injectBundle = () => {
  injectScript("bundle.js", "body");
};

const injectBrowserLog = () => {
  injectScript("./js/monitoring.js", "head");
};

(function (d, s, id) {
  let js,
    fjs = d.querySelector(s);
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement("script");
  js.id = id;
  js.onload = function () {
    injectBrowserLog();
  };
  js.src = "https://www.datadoghq-browser-agent.com/datadog-logs-v4.js";
  fjs.appendChild(js);
})(document, "head", "datadog-logs-v4");

const renderWrapper = async (description) => {
  await fetchHeader();
  await fetchDescription(description);
  await fetchFooter();

  injectBundle();
};

export default renderWrapper;
