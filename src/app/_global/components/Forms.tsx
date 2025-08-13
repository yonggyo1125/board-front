'use client'
import styled, { css } from 'styled-components'
import color from '../styles/color'
import fontsize from '../styles/fontsize'
const { dark, light } = color
const { medium } = fontsize

const commonStyle = css`
  color: ${dark};
  border: 1px solid ${light};
  font-size: ${medium};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
`

export const Input = styled.input`
  ${commonStyle}
  height: 50px;
`
