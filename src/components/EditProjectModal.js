// EditProjectModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useProjectStore from '../store/projectStore';

const EditProjectModal = ({ show, handleClose, projectId }) => {
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
    handleClose();
  };

  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="projectName">Nombre del Proyecto</Form.Label>
            <Form.Control 
              type="text" 
              id="projectName" 
              name="name"
              value={project.name} 
              onChange={handleChange} 
              placeholder="Ingrese el nombre del proyecto" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="projectDescription">Descripción del Proyecto</Form.Label>
            <Form.Control 
              type="text" 
              id="projectDescription" 
              name="description"
              value={project.description} 
              onChange={handleChange} 
              placeholder="Ingrese la descripción del proyecto" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="projectStatus">Estado del Proyecto</Form.Label>
            <Form.Select 
              id="projectStatus" 
              name="status"
              value={project.status} 
              onChange={handleChange}
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProjectModal;
