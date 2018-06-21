import React from 'react';
import PropTypes from 'prop-types';
import { CustomPageTemplate } from '../../templates/custom-page';

const CustomPagePreview = ({ entry, getAsset, widgetsFor, widgetFor }) => {
  const chunks = entry.getIn(['data', 'chunk']);
  let widgets = widgetsFor('chunk')
  if (widgets) {
    let i = 0;
    widgets = widgets.map(w => {
      i++;

      return (<div>
        {w}
      </div>);
    });
    console.log(widgets.toJSON())
  }
  //
  //  console.log(widgets ? widgets.map(chunk => chunk ? chunk.getIn(['data', 'image']) : 'nothing') : "test")
  // console.log(widgets ? widgets.map(chunk => chunk ? chunk.getIn(['data', 'image']) : 'nothing') : "test")
  // return (
  //   <CustomPageTemplate
  //     title={entry.getIn(['data', 'title'])}
  //     chunks={chunks ? chunks.toJS() : []}
  //     widgetFor={widgetsFor}
  //     getAsset={getAsset}
  //   />
  // )
  return widgets || <div>Nothing to show</div>
  // return widgetFor('title')
}


CustomPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default CustomPagePreview