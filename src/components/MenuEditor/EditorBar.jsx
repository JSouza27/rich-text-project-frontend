import React from 'react';
import PropTypes from 'prop-types';
import { RichUtils } from 'draft-js';

import { useTheme, styled } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';

import inlineStyles from './Constants';

const MenuButton = styled(({ color, ...other }) => <IconButton { ...other } />)({
  border: 0,
  borderRadius: 3,
  color: (props) => props.color,
  height: 36,
  margin: 2,
  width: 36,
});

function EditorBar({ editorState, updateEditorState }) {
  const { palette: { background, title } } = useTheme();

  const buttonClick = (style) => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <AppBar sx={ { backgroundColor: background.main } }>
      <Toolbar position="fixed">
        <Container>
          {
            inlineStyles.map(({ label, style, icon }, index) => (
              <MenuButton
                aria-label={ label }
                color={ title.main }
                onClick={ () => buttonClick(style) }
                key={ label + index }
              >
                { icon }
              </MenuButton>
            ))
          }
        </Container>
      </Toolbar>
    </AppBar>
  );
}

EditorBar.propTypes = {
  updateEditorState: PropTypes.func.isRequired,
  editorState: PropTypes.shape.isRequired,
};

export default EditorBar;
