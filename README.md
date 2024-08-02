# <a name="proyecto-gestion"></a>Gestión de Proyectos

Prueba tecnica React, aplicativo web tipo CRUD de gestión de proyectos desarrollada con React. Permite a los usuarios crear, editar y eliminar proyectos, asignar tareas a proyectos y realizar búsquedas y filtrados.

## <a name="requisitos"></a>Requisitos

- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior) o **yarn**

## <a name="instalacion"></a>Instalación

<ol>
  <li><b>Clona el repositorio:</b></li>
</ol>

<pre><code>git clone https://github.com/usuario/repositorio.git
cd repositorio
</code></pre>

<ol start="2">
  <li><b>Instala las dependencias:</b></li>
</ol>

Con <b>npm</b>:

<pre><code>npm install
</code></pre>

Con <b>yarn</b>:

<pre><code>yarn install
</code></pre>

## <a name="uso"></a>Uso

<ol>
  <li><b>Inicia el servidor de desarrollo:</b></li>
</ol>

Con <b>npm</b>:

<pre><code>npm start
</code></pre>

Con <b>yarn</b>:

<pre><code>yarn start
</code></pre>

<ol start="2">
  <li><b>Construye la aplicación para producción:</b></li>
</ol>

Con <b>npm</b>:

<pre><code>npm run build
</code></pre>

Con <b>yarn</b>:

<pre><code>yarn build
</code></pre>

Esto generará una versión optimizada de la aplicación en la carpeta <code>build</code>.

## <a name="estructura"></a>Estructura del Proyecto

<ul>
  <li><b>src/</b>: Contiene el código fuente de la aplicación.
    <ul>
      <li><b>components/</b>: Componentes de React que conforman la interfaz de usuario.
        <ul>
          <li><code>Home.js</code>: Vista principal para gestionar proyectos.</li>
          <li><code>Project.js</code>: Vista para detalles y gestión de un proyecto específico.</li>
          <li><code>Task.js</code>: Componente para manejar las tareas asociadas a un proyecto.</li>
        </ul>
      </li>
      <li><b>services/</b>: Servicios para manejar la persistencia de datos y lógica de la aplicación.
        <ul>
          <li><code>projectService.js</code>: Servicio para la gestión de proyectos y tareas en <code>localStorage</code>.</li>
        </ul>
      </li>
      <li><code>App.js</code>: Componente principal que configura las rutas de la aplicación.</li>
      <li><code>index.js</code>: Punto de entrada de la aplicación React.</li>
      <li><code>App.css</code>: Estilos globales y layout.</li>
    </ul>
  </li>
  <li><b>public/</b>: Archivos estáticos como <code>index.html</code> y favicon.</li>
</ul>

## <a name="contribuir"></a>Contribuir

<ol>
  <li><b>Haz un fork del repositorio:</b></li>
</ol>

Utiliza la opción "Fork" en la página del repositorio para crear una copia del mismo en tu cuenta.

<ol start="2">
  <li><b>Crea una nueva rama:</b></li>
</ol>

<pre><code>git checkout -b nombre-de-tu-rama
</code></pre>

<ol start="3">
  <li><b>Realiza tus cambios y confirma:</b></li>
</ol>

<pre><code>git add .
git commit -m "Descripción de los cambios"
</code></pre>

<ol start="4">
  <li><b>Envía tu rama al repositorio remoto:</b></li>
</ol>

<pre><code>git push origin nombre-de-tu-rama
</code></pre>

<ol start="5">
  <li><b>Abre un Pull Request:</b></li>
</ol>

Ve a la página del repositorio en GitHub y abre un pull request para solicitar la inclusión de tus cambios.

## <a name="licencia"></a>Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Este formato HTML básico te permitirá tener un `README.md` más estructurado y visualmente atractivo cuando se visualice en plataformas como GitHub. Puedes ajustarlo según las necesidades específicas de tu proyecto.

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
