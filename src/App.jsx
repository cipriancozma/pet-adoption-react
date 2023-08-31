import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Lala" animal="dog" breed="German Sheperd" />
      <Pet name="Napoleon" animal="dog" breed="German Sheperd" />
      <Pet name="Luna" animal="dog" breed="French Buldog" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
