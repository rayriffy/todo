import css from './list.module.css'

import { useTodoList } from '$list/useTodoList'
import { Item } from '$todo/item'


export const List = () => {
  const { data } = useTodoList()

  return (
    <section className={css.container}>
      {data.map(todo => (
        <Item key={'todo-' + todo.id} todo={todo} />
      ))}
    </section>
  )
}
