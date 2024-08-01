import React, { useState } from 'react';
import useProjectStore from '../store/projectStore';

const AddTask = ({ projectId }) => {
  const [descripcion, setDescripcion] = useState('');
  const { addTask } = useProjectStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(projectId, { descripcion });
    setDescripcion('');
  };

  return (
    <div className="mb-4">
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskDescripcion">Descripción de la Tarea</label>
          <input 
            type="text" 
            id="taskDescripcion" 
            className="form-control" 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            placeholder="Ingrese la descripción de la tarea" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default AddTask;
