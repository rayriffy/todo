import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'

import type { Todo } from '$types/todo'

export const listAtom = atom<Todo[]>([])

export const useListAtom = () => useStore(listAtom)
