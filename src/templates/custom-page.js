import React from 'react'
import PropTypes from 'prop-types'

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

const CustomPage = ({ data }) => {
  const { markdownRemark: post } = data;
console.log(post)
    return <div>WIP</div>
  // return (
  //   <CustomPageTemplate
  //     chunks={post.frontmatter.chunk}
  //     title={post.frontmatter.title}
  //   />
  // )
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
          
        }
      }
    }
  }
`
