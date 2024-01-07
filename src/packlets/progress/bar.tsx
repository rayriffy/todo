import { memo } from 'react'

import css from './bar.module.css'

interface Props {
  percent: number
}

export const Bar = memo<Props>(({ percent }) => {
  return (
    <div className={css.container}>
      <div className={css.bar} style={{ width: percent + '%' }}></div>
    </div>
  )
})
