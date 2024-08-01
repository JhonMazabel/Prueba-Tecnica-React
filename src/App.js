import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './pages/ProjectDetails';
import CustomNavbar from './components/Navbar';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
