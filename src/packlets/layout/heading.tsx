import type { PropsWithChildren } from 'react'

import css from './heading.module.css'

export const Heading = ({ children }: PropsWithChildren) => {
  return (
    <section className={css.container}>
      <h1 className={css.heading}>Tasks</h1>
      {children}
    </section>
  )
}
