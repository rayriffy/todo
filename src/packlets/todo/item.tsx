import { Menu } from '@headlessui/react'
import { clsx } from 'clsx'
import { memo, useState } from 'react'

import { deleteTodo } from './actions/deleteTodo'
import { updateTodo } from './actions/updateTodo'
import { Checkbox } from './checkbox'
import { Form } from './form'
import css from './item.module.css'

import type { Todo } from '$types/todo'


import { Dots } from '$icons/dots'



interface Props {
  todo: Todo
}

export const Item = memo<Props>(({ todo }) => {
  const [editing, setEditing] = useState(false)

  const handleToggle = (completed: boolean) =>
    updateTodo({
      ...todo,
      completed,
    })

  const handleEdit = () => setEditing(true)

  const handleDelete = () => deleteTodo(todo)

  // launch form editor if editing mode is active
  if (editing)
    return <Form action="edit" todo={todo} onSubmit={() => setEditing(false)} />

  return (
    <div className={css.container}>
      <div className={css.left}>
        <Checkbox defaultValue={todo.completed} onCheck={handleToggle} />
        <span>{todo.title}</span>
      </div>
      <div className={css.menuContainer}>
        <Menu>
          <Menu.Button className={css.menuButton}>
            <Dots />
          </Menu.Button>
          <Menu.Items className={css.menuCards}>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(css.menuItem, active && css.hover)}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={clsx(css.menuItem, css.red, active && css.hover)}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  )
})
