"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const element = document.getElementById("react-container");
if (element != null) {
    app_1.runApplication(element);
}
