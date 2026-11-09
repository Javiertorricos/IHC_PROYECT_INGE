const API_URL = 'http://localhost:3001/tasks'

// ============================================
// GET: Obtener todas las tareas de la API
// ============================================
export async function getTasksApi() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`Error al obtener tareas (Status: ${response.status})`)
  }

  return await response.json()
}

// ============================================
// POST: Crear una nueva tarea en la API
// ============================================
export async function createTaskApi(taskData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  })

  if (!response.ok) {
    throw new Error(`Error al crear la tarea (Status: ${response.status})`)
  }

  return await response.json()
}

// ============================================
// PUT: Actualizar una tarea existente en la API
// ============================================
export async function updateTaskApi(id, taskData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData)
  })

  if (!response.ok) {
    throw new Error(`Error en PUT al actualizar la tarea ${id} (Status: ${response.status})`)
  }

  return await response.json()
}

// ============================================
// DELETE: Eliminar una tarea por id en la API
// ============================================
export async function deleteTaskApi(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error(`Error en DELETE al eliminar la tarea ${id} (Status: ${response.status})`)
  }

  return await response.json()
}

export { API_URL }

