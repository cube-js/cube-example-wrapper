/* 
  Scripts for injecting wrapper stylesheet 
  and DataDog Browser Logs 
*/

import wrapperStyle from "../style.css";

// inject DD Browser Logs
(function (scriptId) {
  if (document.getElementById(scriptId)) {
    return;
  }
  const script = document.createElement("script");
  script.id = scriptId;
  script.onload = function () {
    var code = `
    window.DD_LOGS &&
      DD_LOGS.init({
        clientToken: "pubedf0a35240b3fb633f1c005b86c571df",
        site: "datadoghq.com",
        forwardErrorsToLogs: true,
        sampleRate: 100,
        service: "cube-examples",
      });
    `;
    injectScript(null, "head", code);
  };
  script.src = "https://www.datadoghq-browser-agent.com/datadog-logs-v4.js";
  document.querySelector("head").appendChild(script);
})("datadog-logs-v4");

const injectScript = (src, tag, code) => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  src ? (script.src = src) : null;
  code ? (script.text = code) : null;
  document.querySelector(tag).appendChild(script);
};

// Inject stylesheet
(function () {
  const style = document.createElement("style");
  style.innerHTML = wrapperStyle.toString();
  document.querySelector("head").appendChild(style);
})();
