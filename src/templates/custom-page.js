import React from 'react'
import PropTypes from 'prop-types'

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

const getChunks = (chunks) => {
  const result = [];
  chunks
    .filter(c => !!c)
    .forEach((c, i) => {
      let Template, props;
      const widgetName = c.widget || '?';
      const name = c.name || '?';

      if (widgetName !== 'object' && widgetName !== 'list') {
        Template = widgetNameToTemplateMap.get(widgetName);
        props = {[widgetName]: c[widgetName]}

        if (Template) {
          result.push(<Template {...props} key={i} />)
        } else {
          console.warn(`Warning: no template for widgetName: ${widgetName}, name: ${name}`);
        }

      } else if (widgetName === 'list' && name === 'chunk') {
        if (c[name]) {
          result.push(...getChunks(c[name]));
        }
      } else {
        Template = objectTemplateMap.get(name);
        props = c[c.name];

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
  console.log(frontmatter.chunk)

  const chunks = getChunks(frontmatter.chunk);

  return (
    <CustomPageTemplate
      chunks={chunks}
      title={frontmatter.title}
    />
  )
};

CustomPage.propTypes = {
  data: PropTypes.object.isRequired,
}

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
`
