import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./components/Home";
import Exercises from "./components/Exercises/Exercises";
import DailyRoutine from "./components/dailyRoutine/DailyRoutine";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layaout from "./components/Layout";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layaout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/exercises"
            element={<Exercises />}
          />
          <Route
            path="/dailyRoutine"
            element={<DailyRoutine />}
          />
        </Routes>
      </Layaout>
    </Router>
  </React.StrictMode>,
)
