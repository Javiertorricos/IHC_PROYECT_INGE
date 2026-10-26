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

  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <Header />
        <main className='max-w-4xl mx-auto px-6 py-8'>
          <h2>Formulario de tareas</h2>
          <div>
            <ActivityForm />
          </div>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Mis tareas</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {
              taskList.map(task => (
                //SPREAD OPERATOR
                <TaskCard 
                key={task.id}
                {...task} />
              ))
            }
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
