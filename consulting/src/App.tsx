import React from "react";
import "./App.css";
import { RootPage } from "./root/RootPage";
import { BrowserRouter } from "react-router-dom";

import "@cloudscape-design/global-styles/index.css";
import {
  applyMode,
  Mode,
  Density,
  applyDensity,
} from "@cloudscape-design/global-styles";

function App() {
  applyMode(Mode.Dark);
  applyDensity(Density.Comfortable);
  return (
    <div className="App">
      <BrowserRouter>
        <RootPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
