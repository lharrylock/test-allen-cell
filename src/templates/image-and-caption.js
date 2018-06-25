import PropTypes from 'prop-types';
import React from 'react';

import './image-and-caption.scss';

const imageAndCaptionTemplate = ({image, caption}) => (
    <div className="image-and-caption">
        {image && <img src={image} className="image"/>}
        <div className="caption">Caption: {caption}</div>
    </div>
);

imageAndCaptionTemplate.propTypes = {
    image: PropTypes.string,
    caption: PropTypes.string
};

imageAndCaptionTemplate.defaultProps = {
    image: '',
    caption: ''
};

export default imageAndCaptionTemplate;
