import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import useProjectStore from '../store/projectStore';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles.css'; 

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects, taskCounts, fetchProjects, fetchTasks } = useProjectStore();
  const [project, setProject] = useState(null);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    if (projects.length > 0) {
      const selectedProject = projects.find(p => p.id === projectId);
      setProject(selectedProject);
      fetchTasks(projectId);
    }
  }, [projects, projectId, fetchTasks]);

  const handleOpenAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="project-list-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button 
          className="btn btn-circle btn-secondary"
          onClick={handleBackClick}
          aria-label="Volver a proyectos"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-center">Detalles del Proyecto</h1>
      </div>
      {project ? (
        <div className="project-details card p-4 shadow-sm">
          <h2 className="text-center">{project.name}</h2>
          <p className="text-center">{project.description}</p>
          <div className="project-stats mb-4">
            <h3>Estadísticas de Tareas</h3>
            {taskCounts[projectId] ? (
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Pendientes: {taskCounts[projectId].pendiente}</li>
                <li className="list-group-item">En Progreso: {taskCounts[projectId].en_progreso}</li>
                <li className="list-group-item">Completadas: {taskCounts[projectId].completada}</li>
              </ul>
            ) : (
              <p>Cargando estadísticas de tareas...</p>
            )}
          </div>
          <div className="text-center mb-4">
            <button className="btn btn-primary" onClick={handleOpenAddTaskModal}>
              Agregar Tarea
            </button>
          </div>
          <div className="task-list-container">
            <TaskList projectId={projectId} />
          </div>
          <AddTaskModal 
            show={showAddTaskModal} 
            handleClose={handleCloseAddTaskModal} 
            projectId={projectId} 
          />
        </div>
      ) : (
        <p>Cargando detalles del proyecto...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
