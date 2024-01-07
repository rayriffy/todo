import { Menu } from '@headlessui/react'
import { clsx } from 'clsx'
import { memo } from 'react'

import css from './button.module.css'
import { getLabel } from './getLabel'

import { filterAtom, useFilterAtom } from '$contexts/filter'
import { ChevDown } from '$icons/chevDown'


export const Button = memo(() => {
  const filter = useFilterAtom()

  return (
    <div className={css.container}>
      <Menu>
        <Menu.Button className={css.button}>
          <span>{getLabel(filter)}</span>
          <ChevDown />
        </Menu.Button>
        <Menu.Items className={css.menu}>
          {[null, true, false].map(val => (
            <Menu.Item key={'filter-item-' + val?.toString() ?? 'null'}>
              {({ active }) => (
                <button
                  className={clsx(
                    css.menuButton,
                    filter === val ? css.active : active ? css.hover : undefined
                  )}
                  onClick={() => filterAtom.set(val)}
                >
                  {getLabel(val)}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
})
