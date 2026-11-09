import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import TaskCard from './components/TaskCard'
import ActivityForm from './components/ActivityForm'

import { tasks as initialTasks } from './data/tasks'

function App() {

  const [taskList, setTaskList] = useState(initialTasks)

  const [editingTask, setEditingTask] = useState(null)

  // =========================
  // AGREGAR
  // =========================
  function addTask(newTask) {

    setTaskList([
      ...taskList,
      newTask
    ])
  }

  // =========================
  // ELIMINAR
  // =========================
  function deleteTask(id) {

    const newList = taskList.filter(
      task => task.id !== id
    )

    setTaskList(newList)

    if (editingTask?.id === id) {
      setEditingTask(null)
    }
  }

  // =========================
  // INICIAR EDICIÓN
  // =========================
  function editTask(task) {

    setEditingTask(task)
  }

  // =========================
  // ACTUALIZAR
  // =========================
  function updateTask(updatedTask) {

    const newList = taskList.map((task) => {

      if (task.id === updatedTask.id) {
        return updatedTask
      }

      return task
    })

    setTaskList(newList)

    setEditingTask(null)
  }

  // =========================
  // CANCELAR EDICIÓN
  // =========================
  function cancelEdit() {

    setEditingTask(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">

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

        {taskList.length === 0 ? (

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