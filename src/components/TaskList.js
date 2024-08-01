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

  const filteredTasks = (tasks[projectId] || []).filter(task => {
    const matchesSearch = task.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? task.estado === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <h2>Tareas del Proyecto</h2>
      <div className="mb-4">
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
          className="form-control"
        >
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
      </div>
      <ul className="list-group">
        {filteredTasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{task.nombre}</h5>
              <p>{task.descripcion}</p>
              <span className={`badge bg-${task.estado === 'completada' ? 'success' : task.estado === 'en progreso' ? 'warning' : 'secondary'}`}>
                {task.estado.charAt(0).toUpperCase() + task.estado.slice(1)}
              </span>
            </div>
            <div>
              <button 
                onClick={() => handleEditClick(task)} 
                className="btn btn-warning btn-sm me-2"
              >
                <FaEdit /> {/* Icono de editar */}
              </button>
              <button 
                onClick={() => deleteTask(projectId, task.id)} 
                className="btn btn-danger btn-sm"
              >
                <FaTrashAlt /> {/* Icono de eliminar */}
              </button>
            </div>
          </li>
        ))}
      </ul>
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
