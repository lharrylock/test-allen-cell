import PropTypes from 'prop-types';
import React from 'react';
import CMS from 'netlify-cms';

const imageAndCaption = (props) => {
  props = props || {};
  const Image = CMS.getWidget('image').preview;
  const {
    caption,
    getAsset,
    image
  } = props;
  return (
    <div>
      <Image value={image} getAsset={getAsset}/>
      <div className="caption">Caption: {caption || ''}</div>
    </div>
  );
};

imageAndCaption.propTypes  = {
  getAsset: PropTypes.func.isRequired,
  image: PropTypes.node,
  caption: PropTypes.node
};

export default imageAndCaption;