import React, { useState, useEffect } from 'react';
import useProjectStore from '../store/projectStore';

const EditTask = ({ projectId, taskId }) => {
  const { tasks, updateTask } = useProjectStore();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const currentTask = tasks[projectId].find(task => task.id === taskId);
    setTask(currentTask);
  }, [tasks, projectId, taskId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(projectId, taskId, task);
  };

  if (!task) return <p>Cargando tarea...</p>;

  return (
    <div className="mb-4">
      <h2>Editar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskNombre">Nombre de la Tarea</label>
          <input 
            type="text" 
            id="taskNombre" 
            name="nombre"
            className="form-control" 
            value={task.nombre} 
            onChange={handleChange} 
            placeholder="Ingrese el nombre de la tarea" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskDescripcion">Descripción de la Tarea</label>
          <input 
            type="text" 
            id="taskDescripcion" 
            name="descripcion"
            className="form-control" 
            value={task.descripcion} 
            onChange={handleChange} 
            placeholder="Ingrese la descripción de la tarea" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskEstado">Estado de la Tarea</label>
          <select 
            id="taskEstado" 
            name="estado"
            className="form-control" 
            value={task.estado} 
            onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditTask;
