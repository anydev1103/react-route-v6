import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

import Home from "./Home";
import Tracker from "./Tracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:filterUserId" element={<Tracker />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
