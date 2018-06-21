import PropTypes from 'prop-types';
import React from 'react';

const imageAndCaptionTemplate = ({image, caption}) => (
    <div>
        {image && <img src={image} />}
        <div>{caption}</div>
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
