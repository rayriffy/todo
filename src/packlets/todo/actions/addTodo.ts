import { nanoid } from "nanoid"

import { fetch } from '$fetch'

import type { Todo } from "$types/todo"

import { listAtom } from "$contexts/list"

export const addTodo = (title: string) => {
  // build a payload
  const payload: Todo = {
    id: nanoid(),
    title,
    completed: false,
  }

  // update local atom
  listAtom.set(listAtom.get().concat(payload))

  // fire request to server
  return fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}
