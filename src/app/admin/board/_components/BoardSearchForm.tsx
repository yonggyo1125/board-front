'use client'
import React from 'react'
import styled from 'styled-components'
import { Input, TableCols } from '@/app/_global/components/Forms'
import { SubmitButton } from '@/app/_global/components/Buttons'

const StyledForm = styled.form``

const BoardSearchForm = ({ search }) => {
  return (
    <StyledForm method="GET" autoComplete="off">
      <TableCols thwidth={120}>
        <tbody>
          <tr>
            <th>키워드 검색</th>
            <td>
              <select name="sopt" defaultValue={search.sopt ?? 'ALL'}>
                <option value="ALL">통합검색</option>
                <option value="BID">게시판 ID</option>
                <option value="NAME">게시판이름</option>
              </select>
              <Input
                type="text"
                name="skey"
                defaultValue={search.skey ?? ''}
                placeholder="검색 키워드를 입력하세요."
              />
            </td>
          </tr>
        </tbody>
      </TableCols>
    </StyledForm>
  )
}

export default React.memo(BoardSearchForm)
