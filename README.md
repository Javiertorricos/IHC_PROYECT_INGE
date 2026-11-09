# Gestor de Tareas IHC

Proyecto para la gestión de actividades académicas desarrollado con React, Tailwind CSS y Vite.

## Novedades: API REST con `json-server` (GET, POST, PUT, DELETE)

El proyecto ahora se conecta mediante peticiones HTTP `fetch` a una API REST local simulada con `json-server`.

### Métodos HTTP implementados:
- **`GET /tasks`**: Carga inicial de todas las tareas desde la API.
- **`POST /tasks`**: Creación y guardado de una nueva actividad académica.
- **`PUT /tasks/:id`**: Actualización completa de los datos de una tarea existente al editarla.
- **`DELETE /tasks/:id`**: Eliminación permanente de una tarea seleccionada por su `id`.

---

## Cómo ejecutar el proyecto

Para probar el flujo completo con la API:

### 1. Iniciar el servidor API (`json-server`)
En una terminal ejecuta:
```bash
npm run server
```
El servidor se iniciará en `http://localhost:3001/tasks` utilizando los datos de `db.json`.

### 2. Iniciar el cliente React (Vite)
En otra terminal ejecuta:
```bash
npm run dev
```
Abre la aplicación en tu navegador (usualmente `http://localhost:5173`).

---

## Estructura de archivos añadida / modificada

- [`db.json`](file:///c:/Users/Javier/OneDrive/Documentos/Interaccion%20Humano/gestor-tareas-cato/db.json): Base de datos en formato JSON para `json-server`.
- [`src/services/taskService.js`](file:///c:/Users/Javier/OneDrive/Documentos/Interaccion%20Humano/gestor-tareas-cato/src/services/taskService.js): Módulo de peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- [`src/App.jsx`](file:///c:/Users/Javier/OneDrive/Documentos/Interaccion%20Humano/gestor-tareas-cato/src/App.jsx): Integración de llamadas asíncronas con manejo de estados (`loading`, `error`, fallback).
- [`package.json`](file:///c:/Users/Javier/OneDrive/Documentos/Interaccion%20Humano/gestor-tareas-cato/package.json): Script `server` y dependencia `json-server`.
