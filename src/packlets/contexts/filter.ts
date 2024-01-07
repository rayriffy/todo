import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'

export const filterAtom = atom<boolean | null>(null)

export const useFilterAtom = () => useStore(filterAtom)
