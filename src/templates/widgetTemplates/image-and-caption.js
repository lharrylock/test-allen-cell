import React from 'react';
import CMS from 'netlify-cms';

const imageAndCaption = (props) => {
  props = props || {}
  const Image = CMS.getWidget('image').preview;
  const {
    caption,
    image
  } = props;
  return (
    <div>
      <div>caption: {caption || ''}</div>
      <div>image: {image || ''}</div>
    </div>
  );
};

export default imageAndCaption;
