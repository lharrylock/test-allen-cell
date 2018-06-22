import PropTypes from 'prop-types'
import React from 'react'

import ImageAndCaptionTemplate from './image-and-caption';

export const SectionTemplate = ({controls, orientationIsVertical}) => {
  let className = "section-group";
  if (orientationIsVertical) {
    className = `${className} section-group-vertical`
  }
  return (
    <div className={className}>
      {controls.map((control, i) => (
        <div key={`${i}`} className="section-group-item">
          {control}
        </div>
      ))}
    </div>
  );
};

export const CustomPageTemplate = ({title, page}) => {
  let className = "custom-page-sections";
  if (page.orientationIsVertical) {
    className = `${className} section-group-vertical`
  }console.log(page.chunks)
  return (
    <div className="custom-page">
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <div className={className}>
        {page.chunks.map((section, i) => (
          <SectionTemplate key={i} controls={section.components} orientationIsVertical={section.orientationIsVertical}/>
        ))}
      </div>
    </div>
  )
};

CustomPageTemplate.propTypes = {
  page: PropTypes.shape(PropTypes.shape({
    chunks: PropTypes.arrayOf(PropTypes.shape({
      components: PropTypes.arrayOf(PropTypes.element),
      orientationIsVertical: PropTypes.bool
    })),
    orientationIsVertical: PropTypes.bool
  })),
  title: PropTypes.string.isRequired,
};

CustomPageTemplate.defaultProps = {
  chunks: [],
  title: '',
};

const widgetNameToTemplateMap = new Map([
  ['image', (props) => <img src={props.image} />],
  ['text', (props) => <div>{props.text}</div>],
  ['markdown', (props) => <div>{props.markdown}</div>],
  ['date', (props) => <div>{props.date}</div>],
  ['imageAndCaption', ImageAndCaptionTemplate]
]);

const getTemplateAndProps = (w) => {
  let Template, props;

  let widgetName;
  Object.keys(w).forEach(key => {
    if (w[key] && !widgetName) {
      widgetName = key;
    }
  });

  widgetName = widgetName || 'text';
  Template = widgetNameToTemplateMap.get(widgetName);
  // todo hacky
  if (widgetName === 'markdown') {
    props = {[widgetName]: `${w[widgetName]}`};
  } else if (typeof w[widgetName] === 'object') {
    props = w[widgetName];
  } else {
    props = {[widgetName]: w[widgetName]};
  }

  return {
    Template,
    props
  };
};

const getChunks = (chunks, justReturnComponents) => {
  const result = [];
  chunks.forEach((c, i) => {
    if (c.page) {
      if (c.page.chunks && c.page.chunks.length > 0) {
        result.push({
          components: getChunks(c.page.chunks, true),
          orientationIsVertical: c.page.orientationIsVertical
        });
      }
    } else {
      let {
        Template,
        props
      } = getTemplateAndProps(c);

      if (Template) {
        let component = <Template {...props} key={i} />;
        if (justReturnComponents) {
          result.push(component);
        } else {
          result.push({
            components: [component],
            orientationIsVertical: true
          });
        }

      } else {
        console.warn(`Warning: no template`);
      }
    }
  });

  return result;
};

const CustomPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const chunks = getChunks(frontmatter.page.chunks.filter(c => !!c), false);

  return (
    <CustomPageTemplate
      page={{
        chunks,
        orientationIsVertical: frontmatter.page.orientationIsVertical
      }}
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
        page {
          orientationIsVertical
          chunks {
            page {
              orientationIsVertical
              chunks {
                text
                imageAndCaption {
                  image
                  caption
                }
                markdown
              } 
            }
            text  
          }     
        }
      }
    }
  }
`;
