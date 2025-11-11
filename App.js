import React from "react";
import ReactDOM from "react-dom/client";

// const headings = React.createElement("h1", { id: "heading" }, "h1 from React");
// // in the 3 elements 1 is the type of element, 2nd is the attributes and 3rd is the content inside the element
// const parentTag = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "parent" }, [
//     React.createElement("h1", { key: "h1" }, "I am an nested H1 Tag"),
//     React.createElement("h2", { key: "h2" }, "I am an nested H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child", key: "child" }, [
//     React.createElement("h1", { key: "h1" }, "I am an nested H1 Tag"),
//     React.createElement("h2", { key: "h2" }, "I am an nested H2 Tag"),
//   ]),
// ]);

// console.log(parentTag);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentTag);

// Day2 Ends here. Now on we will be using JSX which is easier to understand and write.

const heading = React.createElement("h1", { id: "h1" }, "React is awesome!");
// If we have to add multiple lines of code in JSX then we have to wrap it inside parenthesis
const headingJSX = <h1 className="headingJSX">React is awesome using JSX</h1>;
console.log(heading);
console.log(headingJSX);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(headingJSX);
