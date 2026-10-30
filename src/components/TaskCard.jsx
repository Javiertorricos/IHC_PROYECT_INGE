import { useState } from 'react'

function TaskCard({
  nombre_materia,
  docente,
  fecha,
  estado
}) {

  const [estadoActual, setEstadoActual] = useState(estado)

  function iniciarActividad() {
    setEstadoActual('En progreso')
  }

  function completarActividad() {
    setEstadoActual('Completado')
  }

  function pausarActividad() {
    setEstadoActual('En pausa')
  }

  function reabrirActividad() {
    setEstadoActual('Pendiente')
  }

  function obtenerClaseEstado() {
    //PENDIENTE, EN PROGRESO, EN PAUSA, COMPLETADO

    if (estadoActual === 'Pendiente') {
      return 'bg-yellow-100 text-yellow-800'
    }

    if (estadoActual === 'En progreso') {
      return 'bg-blue-100 text-blue-800'
    }

    if (estadoActual === 'Inactivo') {
      return 'bg-gray-100 text-gray-800'
    }

    return 'bg-green-100 text-green-800'
  }

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">

      <div className="flex justify-between items-start gap-4">

        <div>

          <h3 className="text-xl font-bold text-gray-900">
            {nombre_materia} - {docente}
          </h3>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${obtenerClaseEstado()}`}
        >
          {estadoActual}
        </span>

      </div>

      <p className="text-gray-500 mt-4">
        Fecha de entrega: {fecha}
      </p>

      {estadoActual === 'Pendiente' && (
        <button
          onClick={iniciarActividad}
          className="mt-5 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Realizar actividad
        </button>
      )}

      {estadoActual === 'En progreso' && (
        <button
          onClick={completarActividad}
          className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Completar actividad
        </button>
      )}
      
      {estadoActual === 'Inactivo' && (
        <button
          onClick={iniciarActividad}
          className="mt-5 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Iniciar actividad
        </button>
      )}

      {estadoActual === 'Completado' && (
        <div className="mt-5">

          <p className="text-green-700 font-medium mb-3">
            ✓ Actividad completada correctamente
          </p>

          <button
            onClick={reabrirActividad}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Reabrir actividad
          </button>

        </div>
      )}

    </article>
  )
}

export default TaskCard