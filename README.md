# Cube examples wrapper
This package contains common layout and features like user tracking, feedback and errors logging for [Cube Examples live demo](https://github.com/cube-js/cube.js/tree/master/examples).

## Installation
Install package via yarn or npm:

    $ yarn add cube-example-wrapper

## Usage
At entry point of your app import `createExampleWrapper`:

~~~ js
import createExampleWrapper from "cube-example-wrapper";
~~~

Define example description object contains fields described below and fill it with your values:

~~~ js
const exampleDescription = {
  title: "demo title",
  text: "demo description text",
  tutorialLabel: "use `story` or `tutorial` value",
  tutorialSrc: "link to story or tutorial",
  sourceCodeSrc: "link to source code on GitHub",
};
~~~

Call `createExampleWrapper` with passed `exampleDescription`:

~~~ js
createExampleWrapper(exampleDescription);
~~~

