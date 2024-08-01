// AddProjectModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useProjectStore from '../store/projectStore';

const AddProjectModal = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('activo'); // Nuevo campo
  const { addProject } = useProjectStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ name, description, status }); // Incluye el nuevo campo en el proyecto
    setName('');
    setDescription('');
    setStatus('activo');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="projectName">Nombre del Proyecto</Form.Label>
            <Form.Control 
              type="text" 
              id="projectName" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Ingrese el nombre del proyecto" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="projectDescription">Descripción del Proyecto</Form.Label>
            <Form.Control 
              type="text" 
              id="projectDescription" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Ingrese la descripción del proyecto" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="projectStatus">Estado del Proyecto</Form.Label>
            <Form.Select 
              id="projectStatus" 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar Proyecto
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProjectModal;
