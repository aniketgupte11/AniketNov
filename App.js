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

// React Element using JSX
const headingJSX = <h1 className="headingJSX">React is awesome using JSX</h1>;

// React Functional Component using JSX
// Component Composition - When a component is created inside another component
const Title = function () {
  return (
    <div>
      <h1>This is title component 🤖</h1>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {headingJSX}
      <h1> This is a Functional Component</h1>
    </div>
  );
};

console.log(heading);
console.log(headingJSX);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(headingJSX);
root.render(<HeadingComponent />);

//Note:- If we have any react element then it is rendered as the name.
//But if the react element is a component then it is rendered as <ComponentName />
