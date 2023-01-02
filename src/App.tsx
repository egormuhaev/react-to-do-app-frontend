import React from "react";
import "./App.css";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreviewPage from "./components/PreviewPage/PreviewPage";
import LoadData from "./components/LoadData/LoadData";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/load" element={<LoadData />} />
          <Route path="/autorization/*" element={<AuthorizationPage />} />
          <Route path="/workspace/*" element={<WorkSpace />} />
          <Route path="/" element={<PreviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
