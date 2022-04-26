import React from "react";
import Layout from "./components/Common/Layout";
import MainPage from "./components/Pages/MainPage";
import { Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import "./assets/scss/media.scss"
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/CakeLabs-Task" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;