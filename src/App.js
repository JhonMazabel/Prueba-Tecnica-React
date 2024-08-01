import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import AddProject from './components/AddProject';
import ProjectDetails from './pages/ProjectDetails';
import EditProjectPage from './pages/EditProjectPage';
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
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
            <Route path="/edit-project/:projectId" element={<EditProjectPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
