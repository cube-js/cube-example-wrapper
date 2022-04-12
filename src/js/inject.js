/* 
  Scripts for injecting wrapper stylesheet 
  and DataDog Browser Logs 
*/

import wrapperStyle from "../style.css";

// inject DD Browser Logs
(function (d, s, id) {
  let js,
    fjs = d.querySelector(s);
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement("script");
  js.id = id;
  js.onload = function () {
    var c = `
    window.DD_LOGS &&
      DD_LOGS.init({
        clientToken: "pubedf0a35240b3fb633f1c005b86c571df",
        site: "datadoghq.com",
        forwardErrorsToLogs: true,
        sampleRate: 100,
        service: "cube-examples",
      });
    `;
    injectScript(null, "head", c);
  };
  js.src = "https://www.datadoghq-browser-agent.com/datadog-logs-v4.js";
  fjs.appendChild(js);
})(document, "head", "datadog-logs-v4");

const injectScript = (src, t, c) => {
  const s = document.createElement("script");
  s.type = "text/javascript";
  src ? (s.src = src) : null;
  c ? (s.text = c) : null;
  document.querySelector(t).appendChild(s);
};

// Inject stylesheet
(function () {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = wrapperStyle.toString();
  document.querySelector("head").appendChild(style);
})();
