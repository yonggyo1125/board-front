import React from 'react'
import styled from 'styled-components'
import MessageType from '../types/MessageType'

const StyledMessage = styled.div``

const MessageBox = ({ children, color, message }: MessageType) => {
  if (children) message = children
  message = Array.isArray(message) ? message : message ? [message] : []
  if (message.length === 0) return <></>
}

export default React.memo(MessageBox)
