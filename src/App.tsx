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
        <Sidebar  />  
        <MainContent />
      </div>
    </Router>
  );
};

export default App;
