import React from 'react';

const Statistics = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => task.status === 'pendiente').length;
  const inProgressTasks = tasks.filter(task => task.status === 'en progreso').length;
  const completedTasks = tasks.filter(task => task.status === 'completada').length;

  return (
    <div className="mt-3">
      <h5>Estadísticas de Tareas</h5>
      <p>Pendientes: {pendingTasks}</p>
      <p>En Progreso: {inProgressTasks}</p>
      <p>Completadas: {completedTasks}</p>
    </div>
  );
};

export default Statistics;
