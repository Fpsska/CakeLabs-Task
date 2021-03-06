import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../Common/Layout';
import MainPage from '../Pages/MainPage';
import '../../assets/scss/style.scss';
import '../../assets/scss/media.scss';
import './App.css';

// /. imports

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
