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
        <div className="search-bar">
          <input type="text" placeholder="Buscar por nombre" className="form-control" />
          <select className="form-select">
            <option value="todos">Todos</option>
            <option value="activos">Activos</option>
            <option value="inactivos">Inactivos</option>
          </select>
          <button className="btn btn-primary">Buscar</button>
        </div>
        <h5 className="card-title">Lista de Proyectos</h5>
        <ProjectList projects={[
          { id: 1, name: 'ejemplo', description: 'es', status: 'Activo' },
          { id: 2, name: 'ejemplos', description: 'esdfs', status: 'Inactivo' }
        ]} />
      </div>
    </div>
  </div>
);

export default HomePage;
