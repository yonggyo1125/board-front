import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`

`;

const JoinForm = ({ errors, action, pending }) => {
  return (
    <StyledForm action={action} autoComplete="off">
     
    </StyledForm>
  )
}

export default React.memo(JoinForm)
