import { useMemo } from 'react'

import { useListAtom } from '$contexts/list'

export const useProgress = () => {
  const todoList = useListAtom()

  // count done items in the list
  const done = useMemo(
    () => todoList.filter(todo => todo.completed).length,
    [todoList]
  )

  // calculate percent of done items in the list
  const percent = useMemo(
    () => Math.floor((done / Math.max(todoList.length, 1)) * 100),
    [todoList, done]
  )

  return {
    done,
    percent,
  }
}
