import { useCallback, useEffect, useMemo, useState } from 'react'

import { fetch } from '$fetch'

import type { Todo } from '$types/todo'

import { useFilterAtom } from '$contexts/filter'
import { listAtom, useListAtom } from '$contexts/list'


export const useTodoList = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const todos = useListAtom()
  const filter = useFilterAtom()

  const refresh = useCallback(() => {
    setLoading(true)
    setError(false)

    fetch('/todos')
      // reject if status is not 200, otherwise return into parsed object
      .then(o => {
        if (o.ok) return o.json() as Promise<Todo[]>
        else throw o
      })
      // set todo into atom
      .then(o => {
        listAtom.set(o)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const finalizedTodo = useMemo(
    () => todos.filter(todo => filter === null || todo.completed === filter),
    [todos, filter]
  )

  useEffect(() => {
    refresh()
  }, [])

  return {
    loading,
    error,
    refresh,
    data: finalizedTodo,
  }
}
