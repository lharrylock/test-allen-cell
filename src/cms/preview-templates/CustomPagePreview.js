import React from 'react';
import PropTypes from 'prop-types';
import { CustomPageTemplate } from '../../templates/custom-page';

const CustomPagePreview = ({ entry }) => {
  const chunks = entry.getIn(['data', 'chunk']);
  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'])}
      chunks={chunks ? chunks.toJS() : []}
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