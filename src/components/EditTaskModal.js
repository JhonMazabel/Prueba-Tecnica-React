import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useProjectStore from '../store/projectStore';

const EditTaskModal = ({ show, handleClose, task, projectId }) => {
  const { updateTask } = useProjectStore();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    estado: ''
  });

  useEffect(() => {
    if (task) {
      setFormData({
        nombre: task.nombre,
        descripcion: task.descripcion,
        estado: task.estado
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(projectId, task.id, formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Tarea</Modal.Title>
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
            Guardar cambios
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTaskModal;
