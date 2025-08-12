'use client'
import styled, { css } from 'styled-components'
import ButtonType from '../types/ButtonType'
import color from '../styles/color'
import fontsize from '../styles/fontsize'
const { primary, light } = color
const { normal } = fontsize

const commonStyle = css`
  background: ${primary};
  color: ${light};
  width: 120px;
  height: 40px;
  border: 0;
  cursor: pointer;
`

export const Button = styled.button<ButtonType>`
  ${commonStyle}
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}

    ${({ color: c }) => {
    c = c ?? 'primary'
    const _color = color[c] ? color[c] : c
    return css`
      background: ${_color};
    `
  }}
    
    ${({ fontsize: size }) => {
    size = size ?? 'normal'
    return css`
      font-size: ${fontsize[size] ?? size};
    `
  }}

  ${({ fontcolor }) => {
    fontcolor = fontcolor ?? 'light'

    return css`
      color: ${fontcolor ?? fontcolor};
    `
  }}
`
