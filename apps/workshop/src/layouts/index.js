import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Navigation } from '../components/navigation'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      {
        sidebar: allSidebarYaml {
          edges {
            node {
              title
              items {
                title
                link
                items {
                  link
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Navigation />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            @media only screen and (max-width: 50rem) {
              display: block;
            }
          `}
        >
          <main
            css={css`
              display: flex;
              flex-grow: 1;
              justify-content: center;
              margin: 0;
              padding-left: 20rem;
              width: 100%;
              @media only screen and (max-width: 50rem) {
                padding-left: 0;
              }
            `}
          >
            <div
              css={css`
                max-width: 100%;
                width: 50rem;
                padding: 0 2rem;
                margin-top: 50px;
                @media only screen and (max-width: 50rem) {
                  width: 100%;
                  position: relative;
                }
              `}
            >
              {children}
            </div>
          </main>
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
