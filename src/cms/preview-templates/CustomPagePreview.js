import React from 'react';
import PropTypes from 'prop-types';
import { CustomPageTemplate } from '../../templates/custom-page';

const CustomPagePreview = ({ entry }) => {
  const chunk = entry.getIn(['data', 'chunk'])
  if (chunk)
    console.log(chunk.getIn(['data', 'text']))
  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'])}
      chunk={entry.getIn(['data', 'chunk'])}
    />
  )
}


CustomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  // widgetFor: PropTypes.func,
}

export default CustomPagePreview