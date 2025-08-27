'use client'
import React from 'react'
import styled from 'styled-components'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import type { BoardFormType } from '@/app/board/_types/BoardType'
import MessageBox from '@/app/_global/components/MessageBox'
import { Input, Select, Textarea } from '@/app/_global/components/Forms'
import { SubmitButton } from '@/app/_global/components/Buttons'
import useUser from '@/app/_global/hooks/useUser'
import Editor from '@/app/_global/components/Editor'
import FileUpload from '@/app/_global/components/FileUpload'
import FileItems from '@/app/_global/components/FileItems'

const StyledForm = styled.form``

const BoardForm = ({
  board,
  data,
  action,
  errors,
  pending,
  onChange,
  onToggle,
  editorCallback,
  fileUploadCallback,
  fileDeleteCallback,
}: BoardFormType) => {
  const { isAdmin } = useUser()
  console.log('board', board)
  return (
    <StyledForm action={action} autoComplete="off">
      <input type="hidden" name="bid" defaultValue={data.bid} />
      <input type="hidden" name="gid" defaultValue={data.gid} />
      <input type="hidden" name="notice" defaultValue={'' + data.notice} />

      <MessageBox color="danger">{errors?.bid}</MessageBox>
      <MessageBox color="danger">{errors?.gid}</MessageBox>

      <dl>
        <dt>작성자</dt>
        <dd>
          <Input
            type="text"
            name="poster"
            value={data.poster}
            onChange={onChange}
          />
          <MessageBox color="danger">{errors?.poster}</MessageBox>
        </dd>
      </dl>
      {isAdmin && (
        <dl>
          <dt>공지글</dt>
          <dd>
            <span onClick={() => onToggle('notice', !data.notice)}>
              {data.notice ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              공지글로 게시하기
            </span>
          </dd>
        </dl>
      )}
      {data.guest && (
        <dl>
          <dt>비밀번호</dt>
          <dd>
            <Input
              type="password"
              name="guestPw"
              value={data.guestPw}
              onChange={onChange}
            />
            <MessageBox color="danger">{errors?.guestPw}</MessageBox>
          </dd>
        </dl>
      )}
      {board.categories && board.categories.length > 0 && (
        <dl>
          <dt>분류</dt>
          <dd>
            <Select name="category" value={data.category} onChange={onChange}>
              {board.categories.map((c) => (
                <option value={c} key={'category-' + c}>
                  {c}
                </option>
              ))}
            </Select>
          </dd>
        </dl>
      )}
      <dl>
        <dt>글제목</dt>
        <dd>
          <Input
            type="text"
            name="subject"
            value={data.subject}
            onChange={onChange}
          />
          <MessageBox color="danger">{errors?.subject}</MessageBox>
        </dd>
      </dl>
      <dl>
        <dt>글내용</dt>
        <dd>
          {board.editor ? (
            <>
              <Editor
                height={350}
                callback={editorCallback}
                onChange={onChange}
              />
              {board.imageUpload && (
                <>
                  <FileUpload
                    gid={data.gid}
                    location="editor"
                    imageOnly={true}
                    callback={fileUploadCallback}
                  />
                  <FileItems
                    items={data.editorImages}
                    callback={fileDeleteCallback}
                  />
                </>
              )}
            </>
          ) : (
            <Textarea name="content" value={data.content} onChange={onChange} />
          )}
        </dd>
      </dl>
      {board.attachFile && (
        <dl>
          <dt>파일첨부</dt>
          <dd>
            <FileUpload
              gid={data.gid}
              location="attach"
              callback={fileUploadCallback}
            />
            <FileItems items={data.attachFiles} callback={fileDeleteCallback} />
          </dd>
        </dl>
      )}
    </StyledForm>
  )
}

export default React.memo(BoardForm)
