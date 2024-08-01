import React, { useState } from 'react';
import useProjectStore from '../store/projectStore';
import { useNavigate } from 'react-router-dom';
const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('activo'); // Nuevo campo
  const { addProject } = useProjectStore();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, description, status }); // Incluye el nuevo campo en el proyecto
    setName('');
    setDescription('');
    setStatus('activo');
    navigate('/');
  };

  return (
    <div>
      <h2>Agregar Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Nombre del Proyecto</label>
          <input 
            type="text" 
            id="projectName" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Ingrese el nombre del proyecto" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Descripción del Proyecto</label>
          <input 
            type="text" 
            id="projectDescription" 
            className="form-control" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Ingrese la descripción del proyecto" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectStatus">Estado del Proyecto</label>
          <select 
            id="projectStatus" 
            className="form-control" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Agregar Proyecto</button>
      </form>
    </div>
  );
};

export default AddProject;
