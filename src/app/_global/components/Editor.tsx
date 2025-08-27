import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5'
import 'ckeditor5/ckeditor5.css'

const Editor = ({
  data,
  height,
  callback,
}: {
  data?: any
  height?: number
  callback?: (editor) => void
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        licenseKey: 'GPL',
        plugins: [Essentials, Paragraph, Bold, Italic],
        toolbar: ['undo', 'redo', '|', 'bold', 'italic'],
        initialData: '<p>Hello from CKEditor 5 in React!</p>',
      }}
    />
  )
}

export default React.memo(Editor)
