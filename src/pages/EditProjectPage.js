import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProjectStore from '../store/projectStore';

const EditProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects, updateProject, fetchProjects } = useProjectStore();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    const currentProject = projects.find(p => p.id === projectId);
    setProject(currentProject);
  }, [projects, projectId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(projectId, project);
    navigate('/');
  };

  if (!project) return <p>Cargando proyecto...</p>;

  return (
    <div>
      <h2>Editar Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Nombre del Proyecto</label>
          <input 
            type="text" 
            id="projectName" 
            name="name"
            className="form-control" 
            value={project.name} 
            onChange={handleChange} 
            placeholder="Ingrese el nombre del proyecto" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription">Descripción del Proyecto</label>
          <input 
            type="text" 
            id="projectDescription" 
            name="description"
            className="form-control" 
            value={project.description} 
            onChange={handleChange} 
            placeholder="Ingrese la descripción del proyecto" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectStatus">Estado del Proyecto</label>
          <select 
            id="projectStatus" 
            name="status"
            className="form-control" 
            value={project.status} 
            onChange={handleChange}
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProjectPage;
