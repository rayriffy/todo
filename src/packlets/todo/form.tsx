import { useRef, type FormEventHandler } from 'react'

import { addTodo } from './actions/addTodo'
import { updateTodo } from './actions/updateTodo'
import css from './form.module.css'

import type { Todo } from '$types/todo'

interface Props {
  action: 'add' | 'edit'
  todo?: Todo
  onSubmit?: () => void
}

export const Form = ({ todo, action, onSubmit }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    // fire add event
    if (action === 'add') addTodo(inputRef.current!.value)
    else if (action === 'edit' && todo)
      updateTodo({
        ...todo,
        title: inputRef.current!.value,
      })
    else throw new Error('invalid action')

    formRef.current?.reset()
    onSubmit?.()
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className={css.container}>
      <input
        type="text"
        name="todo"
        ref={inputRef}
        className={css.input}
        placeholder={(action === 'add' ? 'Add' : 'Edit') + ' your todo...'}
        defaultValue={todo?.title}
        required
      />
      {action === 'edit' && (
        <button type="submit" className={css.button}>
          Save
        </button>
      )}
    </form>
  )
}
