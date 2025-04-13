# Sistema de Gestión de Clientes (SGC)

![Banner](https://via.placeholder.com/800x200.png?text=Sistema+de+Gestión+de+Clientes)  
*(Nota: Podés agregar una captura de pantalla aquí reemplazando esta URL)*

**Sistema de Gestión de Clientes (SGC)** es una aplicación web full-stack diseñada para registrar, buscar y gestionar clientes, con un sistema de notificaciones para vencimientos de suscripciones. Este proyecto demuestra habilidades en desarrollo frontend y backend, integración de APIs, manejo de bases de datos y diseño de interfaces responsivas.

## Características principales

- **Registro de clientes**: Permite agregar nuevos clientes con datos como nombre, email, teléfono, dirección y fecha de vencimiento.
- **Búsqueda de clientes**: Busca clientes por nombre y muestra sus detalles en una tarjeta.
- **Listado de clientes**: Muestra todos los clientes registrados en una tabla dinámica.
- **Notificaciones de vencimiento**: Una campana en el navbar alerta sobre clientes cuya suscripción ha vencido, con persistencia entre páginas usando `localStorage`.
- **Actualización automática**: Cambia el estado de los clientes a "vencido" cuando su fecha de vencimiento pasa.
- **Interfaz responsiva**: Diseñada con Bootstrap para adaptarse a diferentes dispositivos.

## Tecnologías utilizadas

- **Frontend**:
  - JavaScript (CommonJS con `require`)
  - Webpack (bundling y servidor de desarrollo)
  - Axios (peticiones HTTP)
  - Bootstrap 5 (diseño responsivo)
  - FontAwesome (íconos)
  - `localStorage` (persistencia de notificaciones)

- **Backend**:
  - Node.js con Express (API REST)
  - MongoDB con Mongoose (base de datos en MongoDB Atlas)
  - CORS (soporte para peticiones cross-origin)

- **Herramientas**:
  - Git (control de versiones)
  - npm (gestión de dependencias)
  - ThunderClient (pruebas de API)

## Requisitos previos

- Node.js (versión 16 o superior)
- npm (viene con Node.js)
- MongoDB Atlas (o una instancia local de MongoDB)
- Git

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/sgc.git
cd sgc
```

### 2. Configurar el backend
```bash
1. Navegá a la carpeta del backend:
cd back

2. Instalá las dependencias:
npm install

3. Creá un archivo .env con las siguientes variables:
PORT=3000
MONGODB_URI=mongodb+srv://tu-usuario:tu-contraseña@cluster0.mongodb.net/clientes_db?retryWrites=true&w=majority

(Reemplazá MONGODB_URI con tu conexión a MongoDB Atlas)

4. Iniciá el servidor:
npm start

El backend estará corriendo en http://localhost:3000
```

### 3. Configurar el frontend
```bash
1. Navegá a la carpeta del frontend:
cd front
2. Instalá las dependencias:
npm install
3. Construí los bundles:
npm run build
4. Iniciá el servidor de desarrollo:
npm start

El frontend estará disponible en http://localhost:8080
```

## Uso
**1. Home (index.html):**
- Buscá un cliente por nombre en el formulario y visualizá sus detalles.
**2. Registrar Cliente (pages/registrar.html):**
- Completá el formulario para añadir un cliente nuevo (el estado se establece como "activo" por defecto).
**3. Lista de Clientes (pages/clientes.html):**
- Verificá todos los clientes registrados en una tabla.
**4. Notificaciones:**
- La campana en el navbar muestra vencimientos. Hacé clic para ver detalles y usá "Limpiar notificaciones" para borrarlas.

**Ejemplo**
- Registrá un cliente con vencimiento "2025-03-03".
- Esperá 30 segundos → La campana mostrará "1" si la fecha actual es posterior.
- Navegá entre páginas → La notificación persiste hasta que la limpiés.

## Decisiones técnicas destacadas
- **Webpack**: Usado para empaquetar módulos CommonJS y servir el frontend en desarrollo.
- **Notificaciones persistentes**: Implementadas con localStorage para mantener estado entre páginas.
- **MongoDB Atlas**: Base de datos en la nube para escalabilidad y facilidad de uso.
- **CommonJS**: Elegido para consistencia entre frontend y backend.

---

### Personalización

1. **Reemplazá placeholders**:
   - `tu-usuario`, `tu-contraseña`, etc., con tus datos reales.
   - Si tenés un nombre específico para la base de datos, cámbialo en `MONGODB_URI`,
   si no lo haces, se creará una por defecto con el nombre "clientes_db"

2. **Capturas de pantalla**:
   - Podés tomar capturas de las páginas (`index.html`, `registrar.html`, `clientes.html`) y la campana, subirlas a GitHub en una carpeta `screenshots/`, y agregarlas así:
     ```markdown
     ![Búsqueda](screenshots/search.png)
     ![Registro](screenshots/register.png)
     ![Lista](screenshots/clients.png)