// EditProjectModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import useProjectStore from '../store/projectStore';

const EditProjectModal = ({ show, handleClose, projectId }) => {
  const { projects, updateProject, fetchProjects } = useProjectStore();
  const [project, setProject] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProject(projectId, project);
      setSuccessMessage('Proyecto guardado exitosamente.');
      setTimeout(() => {
        setSuccessMessage('');
        handleClose();
      }, 2000); // Hide the message and close the modal after 2 seconds
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
    }
  };

  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
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
