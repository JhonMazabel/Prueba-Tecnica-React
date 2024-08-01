import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProjectStore from '../store/projectStore';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ProjectList = () => {
  const { projects, fetchProjects, deleteProject } = useProjectStore();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    // Filtrar y buscar proyectos
    let result = projects;

    if (filter !== 'all') {
      result = result.filter(project => project.status === filter);
    }

    if (search) {
      result = result.filter(project => project.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredProjects(result);
  }, [projects, search, filter]);

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select 
          className="form-select" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="activo">Activos</option>
          <option value="inactivo">Inactivos</option>
        </select>
      </div>
      <Link to="/add-project" className="btn btn-primary mb-3">Agregar Proyecto</Link>
      <ul className="list-group">
        {filteredProjects.map((project) => {
          const status = project.status || 'inactivo';

          return (
            <li key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{project.name}</h5>
                <p>{project.description}</p>
                <span className={`badge bg-${status === 'activo' ? 'success' : 'secondary'}`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>
              <div>
                <Link to={`/project/${project.id}`} className="btn btn-info btn-sm me-2">
                  Ver Detalles
                </Link>
                <Link to={`/edit-project/${project.id}`} className="btn btn-warning btn-sm me-2">
                  <FaEdit /> {/* Icono de editar */}
                </Link>
                <button 
                  onClick={() => deleteProject(project.id)} 
                  className="btn btn-danger btn-sm"
                >
                  <FaTrashAlt /> {/* Icono de eliminar */}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
