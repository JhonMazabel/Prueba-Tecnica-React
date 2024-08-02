// src/pages/ProjectPage.js

import React, { useEffect, useState } from 'react';
import useProjectStore from '../store/projectStore';
import TaskForm from '../components/TaskForm';

const ProjectPage = ({ match }) => {
  const projectId = match.params.id; 
  const [project, setProject] = useState(null);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const { fetchProjectById, fetchTasks, tasks } = useProjectStore(state => ({
    fetchProjectById: state.fetchProjectById,
    fetchTasks: state.fetchTasks,
    tasks: state.tasks,
  }));

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await fetchProjectById(projectId);
      setProject(projectData);
      await fetchTasks();
    };
    fetchData();
  }, [fetchProjectById, fetchTasks, projectId]);

  const projectTasks = tasks.filter(task => task.projectId === projectId);

  return (
    <div>
      <h1>{project?.name}</h1>
      <button onClick={() => setShowTaskForm(!showTaskForm)}>
        {showTaskForm ? 'Cancelar' : 'Agregar Tarea'}
      </button>
      {showTaskForm && <TaskForm projectId={projectId} onClose={() => setShowTaskForm(false)} />}
      <ul>
        {projectTasks.map(task => (
          <li key={task.id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p>Estado: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
