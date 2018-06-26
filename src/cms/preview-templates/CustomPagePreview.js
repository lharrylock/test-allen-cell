import React from 'react';
import PropTypes from 'prop-types';
import ImageAndCaptionPreview from "./ImageAndCaptionPreview";

import { CustomPageTemplate } from '../../templates/custom-page';

// Add custom object previews here if they do not have a widget registered to the CMS already
const objectPreviewMap = new Map([
    ['imageAndCaption', ImageAndCaptionPreview]
]);

const getPreviewAndProps = (w, widgetName, name, getAsset) => {
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
  return {
    Preview,
    props
  };
};

const getChunksPreview = (widgets, getAsset, justReturnComponents) => {
  let result = [];
  widgets.forEach((w, i) => {
    const widgetName = w.get('widget') || '?';
    const name = w.get('name') || '?';

    // Lists are handled as a group of components
    if (widgetName === 'object' && name === 'section') {
      if (w.getIn([name, 'chunks'])) {
        result.push({
          components: getChunksPreview(w.getIn([name, 'chunks']).filter(w => !!w), getAsset, true),
          orientationIsVertical: w.getIn([name, 'orientationIsVertical']),
          color: w.getIn([name, 'sectionColor'])
        });
      }
    } else {
      let {
        Preview,
        props
      } = getPreviewAndProps(w, widgetName, name, getAsset);

      if (Preview) {
        let component = <Preview {...props} key={i} />;
        if (justReturnComponents) {
          result.push(component)
        } else {
          result.push({
            components: [component],
            orientationIsVertical: true
          })
        }

      } else {
        console.warn(`Warning: no preview component registered for widget of type: ${widgetName}, name: ${name}`);
      }
    }
  });

  return result;
};

const CustomPagePreview = ({ entry, getAsset, widgetsFor }) => {
  let pageWidget = widgetsFor('page');
  let chunks = [];
  let orientationIsVertical = false;
  if (pageWidget) {
    let firstLevelChunks = pageWidget.getIn(['widgets', 'chunks']);

    // todo ideally we would register a 'chunks' widget to the CMS and we could just render firstLevelChunks ?
    let rawChunks = firstLevelChunks.props.entry.getIn(['data', 'page', 'chunks']);
    orientationIsVertical = firstLevelChunks.props.entry.getIn(['data', 'page', 'orientationIsVertical']);
    if (rawChunks) {
      rawChunks = rawChunks.filter(c => !!c);
      chunks = getChunksPreview(rawChunks, getAsset, false);
    }
  }

  return (
    <CustomPageTemplate
      title={entry.getIn(['data', 'title'] || '')}
      page={{chunks, orientationIsVertical}}
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
