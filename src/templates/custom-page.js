import React from 'react'
import PropTypes from 'prop-types'

import ImageAndCaptionTemplate from './image-and-caption';

export const CustomPageTemplate = ({title, chunks: controls}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {controls.map((control, i) => (
                  <div key={i} className="test">
                      {control}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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

const CustomPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter.chunk)
  const chunks = frontmatter.chunk
      .filter(c => !!c)
      .map((c, i) => {
        let Template, props;
        const widgetName = c.widget || '?';
        const name = c.name || '?';

        if (widgetName !== 'object') {
          Template = widgetNameToTemplateMap.get(widgetName);
          props = {[widgetName]: c[widgetName]}
        } else {
          Template = objectTemplateMap.get(name);
          props = c[c.name];
        }

        return Template ?
            <Template {...props} key={i} /> :
            <div>`Warning: no template for widgetName: ${widgetName}, name: ${name}`</div>
      });

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
