import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useProjectStore from '../store/projectStore';

const AddTaskModal = ({ show, handleClose, projectId }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    estado: 'pendiente'
  });
  const { addTask } = useProjectStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(projectId, formData);
    setFormData({
      nombre: '',
      descripcion: '',
      estado: 'pendiente'
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control 
              as="textarea" 
              name="descripcion" 
              value={formData.descripcion} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select 
              name="estado" 
              value={formData.estado} 
              onChange={handleChange} 
              required
            >
              <option value="pendiente">Pendiente</option>
              <option value="en progreso">En Progreso</option>
              <option value="completada">Completada</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar Tarea
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
