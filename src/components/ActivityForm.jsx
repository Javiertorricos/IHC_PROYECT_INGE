import { useState } from "react"

function ActivityForm({
  onAddTask
}) {
  const [form, setForm] = useState({
    nombre_materia: '',
    docente: '',
    tarea: '',
    fecha: '',
    estado: 'Inactivo'
  })

  const [error, setError] = useState('')

  function changeForm(event) {
    const { id, value } = event.target

    setForm({
      ...form,
      [id]: value
    })
  }

  //VALIDACIONES
  //AGREGAR LA VALIDACION EN LOS ESTADOS PARA QUE COINCIDAN CON LO QUE SE TIENE GUARDADO ANTERIORMENTE
  //AGREGAR EL FORMATEO DE FECHAS
  //AGREGAR LA VALIDACION DE QUE SE ESCRIBAN MAS DE 10 CARACTERES EN EL CAMPO DESCRIPCION (sin contar los espacios)

  function preventSubmit(event) {
    event.preventDefault()
    
    if (
      form.nombre_materia.trim() === '' ||
      form.docente.trim() === '' ||
      form.tarea.trim() === '' ||
      form.fecha === ''
    ) {
      setError('Complete todos los campos obligatorios.')
      return
    }
    
    const newTask = {
      id: Date.now(),
      ...form
    }

    onAddTask(newTask)

    setError('')

    setForm({
      nombre_materia: '',
      docente: '',
      tarea: '',
      fecha: '',
      estado: 'Inactivo'
    })
  }

  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Nueva tarea</h2>
      {error && (
        <div
          role="alert"
          className="mb-5 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
        >
          {error}
        </div>
      )}
      <form className="grid gap-4 md:grid-cols-2" onSubmit={preventSubmit}>
        <div>
          <label htmlFor="nombre_materia" className="block text-sm font-medium text-gray-700 mb-2">Nombre materia</label>
          <input id="nombre_materia" type="text" value={form.nombre_materia}
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
            <option value="Inactivo">Inactivo</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
            <option value="Completado">Completado</option>
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