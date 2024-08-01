import React, { useEffect, useState } from 'react';
import useProjectStore from '../store/projectStore';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditTask from './EditTask'; // Importa el componente de edición

const TaskList = ({ projectId }) => {
  const { tasks, fetchTasks, deleteTask } = useProjectStore();
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    fetchTasks(projectId);
  }, [fetchTasks, projectId]);

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };

  return (
    <div>
      <h2>Tareas del Proyecto</h2>
      {editingTaskId && <EditTask projectId={projectId} taskId={editingTaskId} />}
      <ul className="list-group">
        {(tasks[projectId] || []).map(task => (
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
                onClick={() => handleEditClick(task.id)} 
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
    </div>
  );
};

export default TaskList;
