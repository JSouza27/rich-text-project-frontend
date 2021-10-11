import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import Container from '@mui/material/Container';

import MyEditor from '../components/MyEditor';
import EditorBar from '../components/MenuEditor/EditorBar';

import createHighlightPlugin from '../plugins/highlightPlugin';

const highlightPlugin = createHighlightPlugin();

const plugins = [highlightPlugin];

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
        plugins={ plugins }
      />
    </Container>
  );
}

export default EditorPage;
