import React from 'react';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatStrikethrough,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
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
    label: 'undeline',
    style: 'UNDERLINE',
    icon: <FormatUnderlined />,
  },
  {
    label: 'strike through',
    style: 'STRIKETHROUGH',
    icon: <FormatStrikethrough />,
  },
];

const alignStyles = [
  {
    label: 'left',
    style: 'LEFT',
    icon: <FormatAlignLeft />,
  },
  {
    label: 'center',
    style: 'CENTER',
    icon: <FormatAlignCenter />,
  },
  {
    label: 'right',
    style: 'RIGHT',
    icon: <FormatAlignRight />,
  },
];

export { inlineStyles, alignStyles };
