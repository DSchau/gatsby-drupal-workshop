import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/tag';

import MDXComponents from '../components/mdx';
import SEO from '../components/seo';

const Container = styled.div`
  details {
    margin: 1rem 0;
    padding: 1rem 0;
    border: 1px solid #eee;
    border-left-width: 0;
    border-right-width: 0;
  }
`;

function Lab({ data }) {
  const { lab } = data;
  return (
    <Container>
      <MDXProvider components={MDXComponents}>
        <SEO title={lab.frontmatter.title} description={lab.excerpt} />
        <h1>{lab.frontmatter.title}</h1>
        <MDXRenderer>{lab.code.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  );
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
`;

export default Lab;
