# Cube examples wrapper
This package contains common layout and features like user tracking, feedback and errors logging for [Cube Examples live demo](https://github.com/cube-js/cube.js/tree/master/examples).

## Installation
Add `.npmrc` configuration file to your project with following content:

    //npm.pkg.github.com/:_authToken={TOKEN}
    @cube-js:registry=https://npm.pkg.github.com


Install package via Github Packages:

    $ npm install @cube-js/cube-example-wrapper@latest

## Usage
At entry point of your app import `createExampleWrapper`:

~~~ js
import createExampleWrapper from "cube-example-wrapper";
~~~

Define example description object contains fields described below and fill it with your values:

~~~ js
const exampleDescription = {
  title: "demo title",
  text: `demo description text`,
};
~~~
*Note: you can use html tags inside `text` template string.*

Call `createExampleWrapper` with passed `exampleDescription`:

~~~ js
createExampleWrapper(exampleDescription);
~~~

