import PropTypes from 'prop-types';
import React from 'react';
import CMS from 'netlify-cms';

const imageAndCaption = (props) => {
  props = props || {}
  console.log(props);
  const Image = CMS.getWidget('image').preview;
  const {
    caption,
    getAsset,
    image
  } = props;
  return (
    <div>
      <div>caption: {caption || ''}</div>
      <div>image: {image || ''}</div>
      <Image value={image} getAsset={getAsset}/>
    </div>
  );
};

imageAndCaption.propTypes  = {
  getAsset: PropTypes.func.isRequired,
  image: PropTypes.node,
  caption: PropTypes.node
};

export default imageAndCaption;
