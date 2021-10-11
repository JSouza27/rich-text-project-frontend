import React from 'react';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatStrikethrough,
} from '@mui/icons-material/';

const inlineStyles = [
  {
    label: 'bold',
    style: 'BOLD',
    icon: <FormatBold />,
  },
  {
    label: 'italic',
    style: 'ITALIC',
    icon: <FormatItalic />,
  },
  {
    label: 'strike through',
    style: 'UNDERLINE',
    icon: <FormatUnderlined />,
  },
  {
    label: 'bold',
    style: 'STRIKETHROUGH',
    icon: <FormatStrikethrough />,
  },
];

export default inlineStyles;
