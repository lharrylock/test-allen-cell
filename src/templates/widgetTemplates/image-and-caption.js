import PropTypes from 'prop-types';
import React from 'react';
import CMS from 'netlify-cms';
import { noop } from 'lodash';

const imageAndCaption = (props) => {
  const Image = CMS.getWidget('image').preview;
  const {
    caption,
    getAsset,
    image
  } = props;
  return (
    <div>
      <Image value={image} getAsset={getAsset}/>
      <div>{caption}</div>
    </div>
  );
};

imageAndCaption.propTypes = {
  getAsset: PropTypes.func.isRequired,
  image: PropTypes.node,
  caption: PropTypes.node
};

imageAndCaption.defaultProps = {
  getAsset: noop,
  image: '',
  caption: ''
};

export default imageAndCaption;
