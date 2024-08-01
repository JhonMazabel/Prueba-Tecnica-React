// src/pages/HomePage.js

import React from 'react';
import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

const HomePage = () => (
  <div className="container mt-4">
    <h1 className="text-center mb-4">Gestión de Proyectos</h1>
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Agregar Nuevo Proyecto</h5>
        <ProjectForm />
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Lista de Proyectos</h5>
        <ProjectList />
      </div>
    </div>
  </div>
);

export default HomePage;
