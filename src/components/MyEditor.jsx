import React from 'react';
import PropTypes from 'prop-types';
import { RichUtils, Editor } from 'draft-js';
// import Editor from '@draft-js-plugins/editor';

import Container from '@mui/material/Container';
import { styled } from '@mui/styles';

const PageContainer = styled(Container)({
  height: '100vh',
  padding: '100px',
});

function MyEditor({ editorState, updateEditorState, plugins }) {
  const editor = React.useRef(null);

  const focusEditor = () => {
    editor.current.focus();
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      updateEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  return (
    <PageContainer onClick={ focusEditor }>
      <Editor
        editorState={ editorState }
        handleKeyCommand={ handleKeyCommand }
        onChange={ updateEditorState }
        plugins={ plugins }
        ref={ editor }
      />
    </PageContainer>
  );
}

MyEditor.propTypes = {
  updateEditorState: PropTypes.func.isRequired,
  editorState: PropTypes.shape.isRequired,
  plugins: PropTypes.arrayOf.isRequired,
};

export default MyEditor;
