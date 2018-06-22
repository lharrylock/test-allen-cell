import PropTypes from 'prop-types'
import React from 'react'

import ImageAndCaptionTemplate from './image-and-caption';

export const SectionTemplate = ({controls}) => {
  if (!Array.isArray(controls)) {
    controls = [controls];
  }
  return (
    <div className="section-group">
      {controls.map((control, i) => (
        <div key={`${i}`} className="section-group-item">
          {control}
        </div>
      ))}
    </div>
  );
};

export const CustomPageTemplate = ({title, chunks: controls}) => {
  return (
    <div className="custom-page">
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <div className="custom-page-sections">
        {controls.map((section, i) => (
          <SectionTemplate key={i} controls={section}/>
        ))}
      </div>
    </div>
  )
};

CustomPageTemplate.propTypes = {
  chunks: PropTypes.any,
  title: PropTypes.string.isRequired,
};

CustomPageTemplate.defaultProps = {
  chunks: [],
  title: '',
};

const widgetNameToTemplateMap = new Map([
  ['image', (props) => <img src={props.image} />],
  ['text', (props) => <div>{props.text}</div>],
  ['date', (props) => <div>{props.date}</div>]
]);

const objectTemplateMap = new Map([
  ['imageAndCaption', ImageAndCaptionTemplate]
]);

const getTemplateAndProps = (w, widgetName, name) => {
  let Template, props;

  // Any widget registered with CMS such as Image, Text, Markdown, etc.
  if (widgetName !== 'object' && widgetName !== 'list') {
    Template = widgetNameToTemplateMap.get(widgetName);
    props = {[widgetName]: w[widgetName]};

    // Objects should have custom previews registered in objectPreviewMap
  } else {
    Template = objectTemplateMap.get(name);
    props = w[name];
  }

  return {
    Template,
    props
  };
};

const getChunks = (chunks) => {
  const result = [];
  chunks.forEach((c, i) => {
    const widgetName = c.widget || '?';
    const name = c.name || '?';

    if (widgetName === 'list' && name === 'chunks') {
      if (c[name]) {
        result.push(getChunks(c[name]));
      }
    } else {
      let {
        Template,
        props
      } = getTemplateAndProps(c, widgetName, name);

      if (Template) {
        result.push(<Template {...props} key={i} />)
      } else {
        console.warn(`Warning: no template for widgetName: ${widgetName}, name: ${name}`);
      }
    }
  });

  return result;
};

const CustomPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const chunks = getChunks(frontmatter.chunk.filter(c => !!c));

  return (
    <CustomPageTemplate
      chunks={chunks}
      title={frontmatter.title}
    />
  )
};

CustomPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CustomPage

export const customPageQuery = graphql`
  query CustomPage($id: String!) {
     markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        chunk {
          chunk {
            name
            widget
            text
            imageAndCaption {
              caption
              image
            }
            markdown
          }
          image
          name
          widget
          text
          date
          fields {
            name
          }
          imageAndCaption {
              caption
              image
            }
        }
      }
    }
  }
`;
