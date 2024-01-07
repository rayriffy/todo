import { memo } from 'react'

import css from './check.module.css'

export const Check = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className={css.icon}
    >
      <path
        d="M7.08339 11.0401L4.75085 8.7076L3.74927 9.70918L7.08339 13.0433L13.9592 6.16751L12.9576 5.16593L7.08339 11.0401Z"
        fill="white"
      />
    </svg>
  )
})
