import React from "react";
import { HashRouter } from "react-router-dom";
import { HomePage } from "./home/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
