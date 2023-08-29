import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "Lala",
      breed: "German Sheperd",
    }),
    React.createElement(Pet, {
      animal: "dog",
      name: "Napoleon",
      breed: "German Sheperd",
    }),
    React.createElement(Pet, {
      animal: "dog",
      name: "Luna",
      breed: "French Buldog",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
