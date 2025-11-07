import React from "react";
import ReactDOM from "react-dom/client";

const headings = React.createElement("h1", { id: "heading" }, "h1 from React");
// in the 3 elements 1 is the type of element, 2nd is the attributes and 3rd is the content inside the element
const parentTag = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "parent" }, [
    React.createElement("h1", { key: "h1" }, "I am an nested H1 Tag"),
    React.createElement("h2", { key: "h2" }, "I am an nested H2 Tag"),
  ]),
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am an nested H1 Tag"),
    React.createElement("h2", { key: "h2" }, "I am an nested H2 Tag"),
  ]),
]);

console.log(parentTag);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentTag);
