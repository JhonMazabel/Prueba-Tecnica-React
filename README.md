Gestión de Proyectos

Una aplicación de gestión de proyectos desarrollada con React. Permite a los usuarios crear, editar y eliminar proyectos, asignar tareas a proyectos y realizar búsquedas y filtrados.

Requisitos
Node.js (versión 14 o superior)
npm (versión 6 o superior) o yarn
Instalación
Clona el repositorio:

bash
Copiar código
git clone https://github.com/usuario/repositorio.git
cd repositorio
Instala las dependencias:

Con npm:

bash
Copiar código
npm install
Con yarn:

bash
Copiar código
yarn install
Uso
Inicia el servidor de desarrollo:

Con npm:

bash
Copiar código
npm start
Con yarn:

bash
Copiar código
yarn start
Esto iniciará la aplicación y la abrirá en http://localhost:3000 en tu navegador.

Construye la aplicación para producción:

Con npm:

bash
Copiar código
npm run build
Con yarn:

bash
Copiar código
yarn build
Esto generará una versión optimizada de la aplicación en la carpeta build.

Estructura del Proyecto
src/: Contiene el código fuente de la aplicación.

components/: Componentes de React que conforman la interfaz de usuario.
Home.js: Vista principal para gestionar proyectos.
Project.js: Vista para detalles y gestión de un proyecto específico.
Task.js: Componente para manejar las tareas asociadas a un proyecto.
services/: Servicios para manejar la persistencia de datos y lógica de la aplicación.
projectService.js: Servicio para la gestión de proyectos y tareas en localStorage.
App.js: Componente principal que configura las rutas de la aplicación.
index.js: Punto de entrada de la aplicación React.
App.css: Estilos globales y layout.
public/: Archivos estáticos como index.html y favicon.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
