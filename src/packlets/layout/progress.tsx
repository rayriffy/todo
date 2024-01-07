import css from './progress.module.css'

import { Bar } from '$progress/bar'
import { useProgress } from '$progress/useProgress'

export const Progress = () => {
  const { done, percent } = useProgress()

  return (
    <section className={css.container}>
      <h1 className={css.heading}>Progress</h1>
      <Bar percent={percent} />
      <p className="text-secondary">{done.toLocaleString()} completed</p>
    </section>
  )
}