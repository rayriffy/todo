import { fetch } from '$fetch'

import type { Todo } from '$types/todo'

import { listAtom } from '$contexts/list'

export const deleteTodo = (todo: Todo) => {
  // update local atom
  listAtom.set(listAtom.get().filter(item => item.id !== todo.id))

  // fire request to server
  return fetch('/todos/' + todo.id, {
    method: 'DELETE',
  })
}
