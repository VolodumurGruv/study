"use strict";
const fs = require("fs");
const path = require("path");
// for reading xlsx files
const xlsx = require("node-xlsx");

const read = () => xlsx.parse(fs.readFileSync(path.resolve("test.xlsx")));
console.log(read());
