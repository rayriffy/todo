import clsx from 'clsx'
import { useState } from 'react'

import css from './checkbox.module.css'

import { Check } from '$icons/check'

interface Props {
  defaultValue?: boolean
  onCheck?: (checked: boolean) => void
}

export const Checkbox = ({ defaultValue = false, onCheck }: Props) => {
  const [checked, setChecked] = useState(defaultValue)

  const handleToggle = () => {
    onCheck?.(!checked)
    setChecked(!checked)
  }

  return (
    <button className={clsx(css.button, checked ? css.filled : undefined)} onClick={handleToggle}>
      <Check />
    </button>
  )
}
