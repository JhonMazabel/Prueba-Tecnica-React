import React, { useEffect, useState } from 'react';
import useProjectStore from '../store/projectStore';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditTaskModal from './EditTaskModal';

const TaskList = ({ projectId }) => {
  const { tasks, fetchTasks, deleteTask } = useProjectStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTasks(projectId);
  }, [fetchTasks, projectId]);

  const handleEditClick = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const handleDeleteClick = (taskId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      deleteTask(projectId, taskId);
    }
  };

  const filteredTasks = (tasks[projectId] || []).filter(task => {
    const matchesSearch = task.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? task.estado === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h2>Tareas del Proyecto</h2>
      <div className="search-bar mb-4">
        <input 
          type="text" 
          placeholder="Buscar tareas..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="form-control mb-2"
        />
        <select 
          value={filterStatus} 
          onChange={handleStatusChange} 
          className="form-select"
        >
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>
      <div className="task-list-container">
        <div className="task-list">
          {filteredTasks.map(task => (
            <div key={task.id} className="project-card">
              <span className={`badge status-badge bg-${task.estado === 'completada' ? 'success' : task.estado === 'en progreso' ? 'warning' : 'secondary'}`}>
                {task.estado.charAt(0).toUpperCase() + task.estado.slice(1)}
              </span>
              <h5>{task.nombre}</h5>
              <p>{task.descripcion}</p>
              <div className="mt-2">
                <button 
                  onClick={() => handleEditClick(task)} 
                  className="btn btn-warning btn-sm btn-circle me-2"
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDeleteClick(task.id)} 
                  className="btn btn-danger btn-sm btn-circle"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {editingTask && (
        <EditTaskModal 
          show={showModal} 
          handleClose={handleCloseModal} 
          task={editingTask} 
          projectId={projectId} 
        />
      )}
    </div>
  );
};

export default TaskList;
