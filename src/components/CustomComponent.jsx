import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

function CustomComponent({ contentState, entityKey, offsetKey, decoratedText }) {
  const { color, componentName } = contentState.getEntity(entityKey).getData();

  return (
    <Box
      data-offset-key={ offsetKey }
      component="span"
      sx={ {
        border: 1,
        display: 'inline',
        position: 'relative',
      } }
    >
      <Box
        component="span"
        sx={ {
          color,
          left: '10px',
          position: 'absolute',
          top: '-24px',
        } }
        contentEditable={ false }
      >
        {componentName}
      </Box>
      <Box component="span" data-text>{decoratedText}</Box>
    </Box>
  );
}

CustomComponent.propTypes = {
  contentState: PropTypes.shape({
    getEntity: PropTypes.func,
  }).isRequired,
  entityKey: PropTypes.string.isRequired,
  offsetKey: PropTypes.string.isRequired,
  decoratedText: PropTypes.string.isRequired,
};

export default CustomComponent;
