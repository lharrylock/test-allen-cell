import React from 'react';
import PropTypes from 'prop-types';
import ImageAndCaptionPreview from "./ImageAndCaptionPreview";

import { CustomPageTemplate } from '../../templates/custom-page';

// Add custom object previews here if they do not have a widget registered to the CMS already
const objectPreviewMap = new Map([
    ['imageAndCaption', ImageAndCaptionPreview]
]);

const getChunksPreview = (widgets, getAsset) => {
  if (widgets) {
    widgets = widgets
      .filter(w => !!w);
    let result = [];
    widgets
      .forEach((w, i) => {

        const widgetName = w.get('widget') || '?';
        const name = w.get('name') || '?';

        // Lists are handled as a group of components
        if (widgetName === 'list' && name === 'chunk') {
          if (w.get(name)) {
            result.push(getChunksPreview(w.get(name), getAsset));
          }
        } else {
          let Preview, props;
          const widget = CMS.getWidget(widgetName);

          // Any widget registered with CMS such as Image, Text, Markdown, etc.
          if (widget && widgetName !== 'object') {
            Preview = widget.preview;
            props = {
              value: w.get(widgetName),
              getAsset
            };

          // Objects should have custom previews registered in objectPreviewMap
          } else {
            Preview = objectPreviewMap.get(name);
            props = w.get(name);
            props = props ? props.toJS() : null;
            props = {
              ...props,
              getAsset
            };
          }

          if (Preview) {
            result.push(<Preview {...props} key={i} />)
          } else {
            console.warn(`Warning: no preview component registered for widget of type: ${widgetName}, name: ${name}`);
          }
        }
      });
    widgets = result;
  }

  return widgets;
};

const CustomPagePreview = ({ entry, getAsset, widgetsFor }) => {
  let widgets = widgetsFor('chunk');
  if (widgets) {
    widgets = widgets.map(w => w.get('data'));
    widgets = getChunksPreview(widgets, getAsset);
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
};

export default CustomPagePreview
