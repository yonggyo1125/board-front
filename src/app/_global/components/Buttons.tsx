'use client'
import styled, { css } from 'styled-components'
import ButtonType from '../types/ButtonType'
import color from '../styles/color'
import fontsize from '../styles/fontsize'

const commonStyle = css`
  width: 120px;
  height: 40px;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  & + & {
    margin-left: 5px;
  }

  svg {
    margin-right: 10px;
  }
  &:disabled {
    opacity: 0.7;
  }
`

export const Button = styled.button<ButtonType>`
  ${commonStyle}
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'string' ? width : width + 'px'};
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
    
    ${({ fontSize: size }) => {
    size = size ?? 'medium'
    return css`
      font-size: ${fontsize[size] ?? size};
      svg {
        font-size: ${fontsize[size] ?? size};
      }
    `
  }}

  ${({ fontColor }) => {
    fontColor = fontColor ?? 'light'

    return css`
      color: ${color[fontColor] ?? fontColor};
      svg {
        color: ${color[fontColor] ?? fontColor};
      }
    `
  }}

  ${({ center }) =>
    center &&
    css`
      display: block;
      margin: 0 auto;
    `}
`

export const SubmitButton = (props) => {
  const { width } = props
  return (
    <Button
      {...props}
      width={width ? `${width}px` : '100%'}
      height={60}
      fontSize="extra"
      center="true"
    >
      {props.children}
    </Button>
  )
}
