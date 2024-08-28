// src/App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
const App: React.FC = () => {



  return (
    <Router basename="/">
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="main">
          <MainContent />
        </div>
      </div>
    </Router>
  );
};

export default App;
