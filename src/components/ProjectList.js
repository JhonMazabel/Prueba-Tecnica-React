import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useProjectStore from '../store/projectStore';
import AddProjectModal from './AddProjectModal';
import EditProjectModal from './EditProjectModal';
import { Button } from 'react-bootstrap';

const ProjectList = () => {
  const { projects, fetchProjects, deleteProject } = useProjectStore();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    let result = projects;

    if (filter !== 'all') {
      result = result.filter(project => project.status === filter);
    }

    if (search) {
      result = result.filter(project => project.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredProjects(result);
  }, [projects, search, filter]);

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleShowEditModal = (projectId) => {
    setEditProjectId(projectId);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditProjectId(null);
  };

  const handleCardClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      deleteProject(projectId);
    }
  };

  return (
    <div className="project-list-container">
      <h1 className="text-center mb-4">Lista de Proyectos</h1>
      <div className="search-bar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select 
          className="form-select" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
        </select>
        <Button variant="primary" onClick={handleShowAddModal}>
          Agregar Proyecto
        </Button>
      </div>
      <div className="project-list">
        {filteredProjects.map((project) => {
          const status = project.status || 'inactivo';

          return (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleCardClick(project.id)}
            >
              <span className={`badge status-badge bg-${status === 'activo' ? 'success' : 'secondary'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <div className="mt-2">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleShowEditModal(project.id); }} 
                  className="btn btn-warning btn-sm btn-circle me-2"
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleDeleteProject(project.id); }} 
                  className="btn btn-danger btn-sm btn-circle"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <AddProjectModal 
        show={showAddModal} 
        handleClose={handleCloseAddModal} 
      />
      {editProjectId && (
        <EditProjectModal 
          show={showEditModal} 
          handleClose={handleCloseEditModal} 
          projectId={editProjectId} 
        />
      )}
    </div>
  );
};

export default ProjectList;
