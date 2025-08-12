/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import styled, { css } from 'styled-components'

const ContentBox = (children, className) => {
  return <section className={'layout-width ' + className}>{children}</section>
}

const StyledContentBox = styled<any>(ContentBox)`
  padding: 50px;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`

export default React.memo(StyledContentBox)
