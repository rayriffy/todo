import { fetch } from '$fetch'

import type { Todo } from '$types/todo'

import { listAtom } from '$contexts/list'

export const updateTodo = (todo: Todo) => {
  // update local atom
  listAtom.set(
    listAtom.get().map(item => {
      if (item.id === todo.id) return todo
      else return item
    })
  )

  // fire request to server
  return fetch('/todos/' + todo.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
}
