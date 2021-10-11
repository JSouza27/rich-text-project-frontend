import React, { useState } from 'react';
import { EditorState } from 'draft-js';

import Container from '@mui/material/Container';

import MyEditor from '../components/MyEditor';
import EditorBar from '../components/EditorBar';

function EditorPage() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const updateEditorState = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <Container>
      <EditorBar
        editorState={ editorState }
        updateEditorState={ updateEditorState }
      />
      <MyEditor
        editorState={ editorState }
        updateEditorState={ updateEditorState }
      />
    </Container>
  );
}

export default EditorPage;
