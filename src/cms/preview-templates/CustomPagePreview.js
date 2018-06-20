import React from 'react';
import PropTypes from 'prop-types';
import { CustomPageTemplate } from '../../templates/custom-page';

const CustomPagePreview = ({ entry, getAsset, widgetFor }) => {
  const chunks = entry.getIn(['data', 'chunk']);
  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'])}
      chunks={chunks ? chunks.toJS() : []}
      widgetFor={widgetFor}
      getAsset={getAsset}
    />
  )
}


CustomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default CustomPagePreview