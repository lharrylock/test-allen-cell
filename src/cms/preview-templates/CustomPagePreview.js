import React from 'react';
import PropTypes from 'prop-types';
import ImageAndCaptionPreview from "./ImageAndCaptionPreview";

import { CustomPageTemplate } from '../../templates/custom-page';

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
        let Preview, props;
        const widgetName = w.get('widget') || '?';
        const widget = CMS.getWidget(widgetName);
        const name = w.get('name') || '?';
        if (widget && widgetName !== 'object' && widgetName !== 'list') {
          Preview = widget.preview;
          props = {value: w.get(widgetName)};
          props = {
            ...props,
            getAsset
          };

          if (Preview) {
            result.push(<Preview {...props} key={i} />)
          } else {
            console.warn(`Warning: no preview component registered for widget of type: ${widgetName}, name: ${name}`);
          }

        } else if (widgetName === 'list' && name === 'chunk') {
          if (w.get(name)) {
            result.push(getChunksPreview(w.get(name), getAsset));
          }
        } else {
          Preview = objectPreviewMap.get(name);
          props = w.get(name);
          props = props ? props.toJS() : null;

          props = {
            ...props,
            getAsset
          };

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
