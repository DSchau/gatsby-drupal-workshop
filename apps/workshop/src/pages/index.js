import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import SEO from '../components/seo';
import Image from '../components/image';

const IndexPage = ({ data }) => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MDXRenderer>{data.index.childMdx.code.body}</MDXRenderer>
    <Image css={{ maxWidth: 300, margin: '1rem auto' }} />
  </React.Fragment>
);

export const indexQuery = graphql`
  query IndexQuery {
    index: file(relativePath: { eq: "index.mdx" }) {
      childMdx {
        code {
          body
        }
      }
    }
  }
`;

export default IndexPage;
