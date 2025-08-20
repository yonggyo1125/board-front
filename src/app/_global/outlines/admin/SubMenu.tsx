import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import useMenu from '../../hooks/useMenu'
import color from '../../styles/color'
import fontsize from '../../styles/fontsize'

const { medium } = fontsize
const { dark, black, white } = color

const StyleSubMenu = styled.nav`
  display: flex;
  height: 47px;
  box-shadow: 2px 2px 5px ${dark};
  border-radius: 5px;
  margin-bottom: 15px;
  a {
    line-height: 45px;
    font-size: ${medium};
    padding: 0 25px;
    color: ${black};

    &.on {
      background: ${dark};
      color: ${white};
    }
  }
`

const SubMenu = () => {
  const items = useMenu()
  const pathname = usePathname()

  return (
    <StyleSubMenu>
      {items.length > 0 &&
        items.map(({ link, text }, i) => (
          <Link
            href={link}
            key={link + '-' + i}
            className={classNames('menu', { on: pathname === link })}
          >
            {text}
          </Link>
        ))}
    </StyleSubMenu>
  )
}

export default React.memo(SubMenu)
