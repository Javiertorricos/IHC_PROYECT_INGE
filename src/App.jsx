import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'
import ActivityForm from './components/ActivityForm'


//datos
import { tasks as initialTasks } from './data/tasks'

function App() {

  const [taskList, setTasks] = useState(initialTasks);

  function addTask(newTask) {
    setTasks(
      [
        ...taskList,
        newTask
      ]
    )
  }

  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <Header />
        <main className='max-w-4xl mx-auto px-6 py-8'>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Formulario de tareas</h2>
          <div>
            <ActivityForm onAddTask={addTask} />
          </div>
          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-gray-800">
              Mis tareas
            </h2>

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
                Utiliza el formulario para registrar tu primera tarea.
              </p>

            </div>

          ) : (

            <div className="grid gap-5 md:grid-cols-2">

              {taskList.map((task) => (

                <TaskCard
                  key={task.id}
                  {...task}
                />

              ))}

            </div>

          )}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
