import React from 'react';
import PropTypes from 'prop-types';
import { RichUtils } from 'draft-js';

import { useTheme, styled } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Container } from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  BorderColor,
  FormatUnderlined,
} from '@mui/icons-material/';

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

  const onBoldClick = () => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onHighlight = () => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'));
  };

  const onUnderline = () => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  return (
    <AppBar sx={ { backgroundColor: background.main } }>
      <Toolbar position="fixed">
        <Container>
          <MenuButton color={ title.main } aria-label="bold" onClick={ onBoldClick }>
            <FormatBold />
          </MenuButton>
          <MenuButton color={ title.main } aria-label="italic" onClick={ onItalicClick }>
            <FormatItalic />
          </MenuButton>
          <MenuButton
            color={ title.main }
            aria-label="underlie"
            onClick={ onUnderline }
          >
            <FormatUnderlined />
          </MenuButton>
          <MenuButton color={ title.main } aria-label="highlight" onClick={ onHighlight }>
            <BorderColor />
          </MenuButton>
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
