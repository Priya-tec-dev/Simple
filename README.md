# Simple
![npm (scoped)](https://img.shields.io/npm/v/@priya_dev/simple)

Converts Celcius to Fahrenheit

# Install
$ npm install @priya_dev/simple

# Usage
const simple = require("@priya_dev/simple");

simple(35);
//=> 35'C is 99'F

simple('35');
//=> Uncaught TypeError: Simple wants a number!
//    at simple (<anonymous>:2:41)
//    at <anonymous>:1:1
