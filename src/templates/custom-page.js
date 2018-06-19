import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const CustomPageTemplate = ({title, chunk}) => {
  //const PageContent = contentComponent || Content
//console.log(chunk)
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              {/*<PageContent className="content" content={content} />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CustomPageTemplate.propTypes = {
  chunk: PropTypes.any,
  title: PropTypes.string.isRequired,
  // content: PropTypes.string,
  // contentComponent: PropTypes.func,
}

const CustomPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('chunk',post.frontmatter.chunk)
  return (
    <CustomPageTemplate
      chunk={post.frontmatter.chunk}
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
