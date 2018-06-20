import React from 'react'
import PropTypes from 'prop-types'
import ImageAndCaption from './widgetTemplates/image-and-caption';

// todo TS enum instead of strings
const widgetToComponentMap = new Map([
  // todo bad way of assigning keys
  ['text', (text) => <p key={text}>{text}</p>],
]);
const objectWidgetMap = new Map([
  ['imageAndCaption', ImageAndCaption]
]);

export class CustomPageTemplate extends React.Component {
  static getTemplateFromControl = (control, i) => {
    const isObjectWidget = control.widget === 'object';
    const Template = isObjectWidget ?
      objectWidgetMap.get(control.name) : widgetToComponentMap.get(control.widget);
    const props = isObjectWidget ? control[control.name] : control[control.widget];
    return <Template {...props} key={i} />;
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {title, chunks: controls} = this.props;
    return (
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                {controls.map((control, i) => CustomPageTemplate.getTemplateFromControl(control, i))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

CustomPageTemplate.propTypes = {
  chunks: PropTypes.any,
  title: PropTypes.string.isRequired,
}

const CustomPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <CustomPageTemplate
      chunks={post.frontmatter.chunk}
      title={post.frontmatter.title}
    />
  )
}

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
          label
          name
          text
          widget
        }
      }
    }
  }
`
