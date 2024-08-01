import create from 'zustand';
import { db } from '../firebaseConfig';
import { collection, addDoc, deleteDoc, doc, updateDoc, query, onSnapshot } from 'firebase/firestore';

const useProjectStore = create((set) => ({
  projects: [],
  tasks: {},
  taskCounts: {},
  fetchProjects: async () => {
    const q = query(collection(db, 'projects'));
    onSnapshot(q, (querySnapshot) => {
      const projects = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      set({ projects });
    });
  },
  addProject: async (project) => {
    await addDoc(collection(db, 'projects'), project);
  },
  updateProject: async (id, project) => {
    await updateDoc(doc(db, 'projects', id), project);
  },
  deleteProject: async (id) => {
    await deleteDoc(doc(db, 'projects', id));
  },
  fetchTasks: async (projectId) => {
    const q = query(collection(db, 'projects', projectId, 'tasks'));
    onSnapshot(q, (querySnapshot) => {
      const tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(tasks);
      set((state) => {
        const taskCounts = {
          pendiente: tasks.filter(task => task.estado === 'pendiente').length,
          en_progreso: tasks.filter(task => task.estado === 'en progreso').length,
          completada: tasks.filter(task => task.estado === 'completada').length,
        };
        return { 
          tasks: { ...state.tasks, [projectId]: tasks },
          taskCounts: { ...state.taskCounts, [projectId]: taskCounts }
        };
      });
    });
  },
  addTask: async (projectId, task) => {
    await addDoc(collection(db, 'projects', projectId, 'tasks'), task);
  },
  updateTask: async (projectId, taskId, task) => {
    await updateDoc(doc(db, 'projects', projectId, 'tasks', taskId), task);
  },
  deleteTask: async (projectId, taskId) => {
    await deleteDoc(doc(db, 'projects', projectId, 'tasks', taskId));
  },
}));

export default useProjectStore;
