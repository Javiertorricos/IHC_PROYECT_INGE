import { useState } from "react"

function ActivityForm() {
  const [form, setForm] = useState({
    nombre_materia: '',
    docente: '',
    tarea: '',
    fecha: '',
    estado: 'Inactivo'
  })

  function changeForm(event) {
    const { key, value } = event.target

    setForm({
      ...form,
      [key]: value
    })
  }

  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Nueva tarea</h2>
      <form className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="materia" className="block text-sm font-medium text-gray-700 mb-2">Nombre materia</label>
          <input id="materia" type="text" value={form.nombre_materia}
            onChange={changeForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="docente" className="block text-sm font-medium text-gray-700 mb-2">Nombre docente</label>
          <input id="docente" type="text" value={form.docente}
            onChange={changeForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="tarea" className="block text-sm font-medium text-gray-700 mb-2">Descripcion de la tarea</label>
          <input id="tarea" type="text" value={form.tarea}
            onChange={changeForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
          <input id="fecha" type="date" value={form.fecha}
            onChange={changeForm}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
          <select id="estado" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white" onChange={changeForm} value={form.estado} >
            <option value="1">Inactivo</option>
            <option value="2">Pendiente</option>
            <option value="3">En proceso</option>
            <option value="4">Completado</option>
          </select>
        </div>
          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Guardar actividad
            </button>

          </div>
      </form>
    </section>
  )
}

export default ActivityForm