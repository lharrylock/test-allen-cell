import PropTypes from 'prop-types'
import React from 'react';
import Link from 'gatsby-link'

export const CustomPagesTemplate = ({pages}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                Custom Pages
              </h2>
              <div className="content">
                {pages.map(({node: page}) => (
                  <p>
                    <Link  className="has-text-primary" to={`/${page.frontmatter.title}`} key={page.frontmatter.title}>{page.frontmatter.title}</Link>
                    <span> &bull; </span>
                    <small>{page.frontmatter.date}</small>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

const CustomPages = ({ data }) => {
  const { edges: pages } = data.allMarkdownRemark;
  console.log(pages);
  return (
    <CustomPagesTemplate pages={pages}/>
  );
};

export default CustomPages;

CustomPages.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const customPagesQuery = graphql`
 query CustomPagesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "custom-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
  `;