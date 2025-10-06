// const heading = React.createElement("h1", {}, "Hello World From React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);

// ........................................... Nested Element....................................

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child " },
//     React.createElement("h1", {}, "im an h1 tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//  ok now we do more complex nested element

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child " }, [
//     React.createElement("h1", {}, "im an h1 tag"),
//     React.createElement("h1", {}, "im an h2 tag"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//  ok now we do more complex nested element crating two childs

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child " }, [
    React.createElement("h1", {}, "im an h1 tag"),
    React.createElement("h2", {}, "im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2 " }, [
    React.createElement("h1", {}, "im an h1 tag"),
    React.createElement("h2", {}, "im an h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
