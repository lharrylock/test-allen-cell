import React from 'react';
import PropTypes from 'prop-types';
import ImageAndCaptionPreview from "./ImageAndCaptionPreview";

import { CustomPageTemplate } from '../../templates/custom-page';

const objectPreviewMap = new Map([
    ['imageAndCaption', ImageAndCaptionPreview]
]);

const CustomPagePreview = ({ entry, getAsset, widgetsFor }) => {
  let widgets = widgetsFor('chunk');
  if (widgets) {
    widgets = widgets
        .filter(w => !!w)
        .map((w, i) => {
            let Preview, props;
            const widgetName = w.getIn(['data', 'widget']) || '?';
            const widget = CMS.getWidget(widgetName);
            const name = w.getIn(['data', 'name']) || '?';

            if (widget && widgetName !== 'object') {
                Preview = widget.preview;
                props = {value: w.getIn(['data', widgetName])};
            } else {
                Preview = objectPreviewMap.get(name);
                props = w.getIn(['data', name]);
                props = props ? props.toJS() : null;
            }
            props = {
                ...props,
                getAsset
            };

            return Preview ? (
                <Preview {...props} key={i} />
            ) : <div>{`Warning: no preview component registered for widget of type: ${widgetName}, name: ${name}`}</div>;
    });
  }
  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'] || '')}
      chunks={widgets || []}
    />
  )
};


CustomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default CustomPagePreview
