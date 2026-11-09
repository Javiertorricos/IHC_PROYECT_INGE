import { useState, useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import TaskCard from './components/TaskCard'
import ActivityForm from './components/ActivityForm'

import { tasks as initialTasks } from './data/tasks'
import {
  getTasksApi,
  createTaskApi,
  updateTaskApi,
  deleteTaskApi
} from './services/taskService'

function App() {

  const [taskList, setTaskList] = useState([])
  const [editingTask, setEditingTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState(null)

  // ============================================
  // GET: OBTENER TAREAS DESDE LA API
  // ============================================
  useEffect(() => {
    let isMounted = true

    getTasksApi()
      .then((data) => {
        if (isMounted) {
          setTaskList(data)
          setApiError(null)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error('Error al conectar con la API (GET):', err)
          setApiError('No se pudo conectar con json-server (puerto 3001). Usando datos locales. Para iniciar el servidor ejecuta: npm run server')
          setTaskList(initialTasks)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  // ============================================
  // POST: AGREGAR TAREA A LA API
  // ============================================
  async function addTask(newTask) {
    try {
      const createdTask = await createTaskApi(newTask)
      setTaskList((prev) => [...prev, createdTask])
    } catch (err) {
      console.error('Error en POST:', err)
      // Fallback local si la API no responde
      setTaskList((prev) => [...prev, newTask])
    }
  }

  // ============================================
  // DELETE: ELIMINAR TAREA EN LA API
  // ============================================
  async function deleteTask(id) {
    try {
      await deleteTaskApi(id)
      setTaskList((prev) => prev.filter((task) => String(task.id) !== String(id)))
    } catch (err) {
      console.error('Error en DELETE:', err)
      // Fallback local si la API no responde
      setTaskList((prev) => prev.filter((task) => String(task.id) !== String(id)))
    }

    if (String(editingTask?.id) === String(id)) {
      setEditingTask(null)
    }
  }

  // ============================================
  // INICIAR EDICIÓN
  // ============================================
  function editTask(task) {
    setEditingTask(task)
  }

  // ============================================
  // PUT: ACTUALIZAR TAREA EN LA API
  // ============================================
  async function updateTask(updatedTask) {
    try {
      const responseTask = await updateTaskApi(updatedTask.id, updatedTask)

      setTaskList((prev) =>
        prev.map((task) =>
          String(task.id) === String(updatedTask.id) ? responseTask : task
        )
      )
    } catch (err) {
      console.error('Error en PUT:', err)
      // Fallback local si la API no responde
      setTaskList((prev) =>
        prev.map((task) =>
          String(task.id) === String(updatedTask.id) ? updatedTask : task
        )
      )
    } finally {
      setEditingTask(null)
    }
  }

  // ============================================
  // CANCELAR EDICIÓN
  // ============================================
  function cancelEdit() {
    setEditingTask(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">

        {apiError && (
          <aside
            role="status"
            className="mb-6 p-4 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-sm flex items-start gap-3"
          >
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-semibold">{apiError}</p>
              <p className="text-xs text-amber-700 mt-1">
                Para iniciar el servidor de prueba, ejecuta en una terminal: <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">npm run server</code>
              </p>
            </div>
          </aside>
        )}

        <ActivityForm
          onAddTask={addTask}
          onUpdateTask={updateTask}
          editingTask={editingTask}
          onCancelEdit={cancelEdit}
        />

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Mis tareas
            </h2>

            <p className="text-gray-500 mt-1">
              Gestiona tus actividades académicas
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Total: {taskList.length}
          </span>

        </div>

        {loading ? (

          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500">
            Cargando tareas desde la API...
          </div>

        ) : taskList.length === 0 ? (

          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">

            <h3 className="text-lg font-semibold text-gray-900">
              No hay tareas registradas
            </h3>

            <p className="text-gray-500 mt-2">
              Utiliza el formulario para registrar una nueva tarea.
            </p>

          </div>

        ) : (

          <div className="grid gap-5 md:grid-cols-2">

            {taskList.map((task) => (

              <TaskCard
                key={task.id}
                {...task}
                onEdit={() => editTask(task)}
                onDelete={deleteTask}
              />

            ))}

          </div>

        )}

      </main>

      <Footer />

    </div>
  )
}

export default App
