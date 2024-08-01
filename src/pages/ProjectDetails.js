import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';
import useProjectStore from '../store/projectStore';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { projects, taskCounts, fetchProjects, fetchTasks } = useProjectStore();
  const [project, setProject] = useState(null);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  useEffect(() => {
    fetchProjects(); // Carga los proyectos
  }, [fetchProjects]);

  useEffect(() => {
    if (projects.length > 0) {
      const selectedProject = projects.find(p => p.id === projectId);
      setProject(selectedProject);
      fetchTasks(projectId); // Carga las tareas del proyecto
    }
  }, [projects, projectId, fetchTasks]);

  const handleOpenAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const handleCloseAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  return (
    <div>
      {project ? (
        <>
          <h1>Detalles del Proyecto</h1>
          <div className="mb-4">
            <h2>Nombre del Proyecto: {project.name}</h2>
            <p>Descripción: {project.description}</p>
          </div>
          <div className="mb-4">
            <h3>Estadísticas de Tareas</h3>
            {taskCounts[projectId] ? (
              <ul>
                <li>Pendientes: {taskCounts[projectId].pendiente}</li>
                <li>En Progreso: {taskCounts[projectId].en_progreso}</li>
                <li>Completadas: {taskCounts[projectId].completada}</li>
              </ul>
            ) : (
              <p>Cargando estadísticas de tareas...</p>
            )}
          </div>
          <div className="mb-4">
            <button className="btn btn-primary" onClick={handleOpenAddTaskModal}>
              Agregar Tarea
            </button>
          </div>
          <div>
            <TaskList projectId={projectId} />
          </div>
          <AddTaskModal 
            show={showAddTaskModal} 
            handleClose={handleCloseAddTaskModal} 
            projectId={projectId} 
          />
        </>
      ) : (
        <p>Cargando detalles del proyecto...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
