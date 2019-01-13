import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import SEO from '../components/seo'

function Lab({ data }) {
  const { lab } = data
  return (
    <React.Fragment>
      <SEO title={lab.frontmatter.title} description={lab.excerpt} />
      <h1>{lab.frontmatter.title}</h1>
      <MDXRenderer>{lab.code.body}</MDXRenderer>
    </React.Fragment>
  )
}

export const labQuery = graphql`
  query LabQuery($slug: String!) {
    lab: mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

export default Lab
