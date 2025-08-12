'use client'
import styled, { css } from 'styled-components'
import TitleType from '../types/TItleType'
import color from '../styles/color'
import fontsize from '../styles/fontsize'
const { big } = fontsize
const { black } = color

export const MainTitle = styled.h1<TitleType>`
  font-size: ${big};
  padding: 0 10px 20px;
  margin: 0;
  color: ${black};
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
  ${({ border }) =>
    border &&
    css`
      border-bottom: 3px solid ${black};
      margin-bottom: 30px;
    `}
`
