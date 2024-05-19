import React from 'react';
import './App.css'; // Import the CSS file for styling
import { Route, Routes } from 'react-router-dom';
import ProjectPage from './components/Projects/ProjectPage';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </div>



  );
}

export default App;
