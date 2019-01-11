import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import SidebarComponent from '@dschau/sidebar'

import Header from '../components/header'

const Container = styled.div``

const Sidebar = styled(SidebarComponent)`
  position: fixed;
  top: 92px;
  left: 0;
  width: 16.8em;
`

const Content = styled.div`
  padding-left: 16.8em;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Sidebar
          itemList={[
            {
              items: [
                {
                  hash: false,
                  link: '/docs/',
                  parentTitle: 'Documentation',
                  title: 'Introduction',
                },
              ],
              key: 'documentation',
              title: 'Documentation',
            },
          ]}
          key="asdf"
          location={location}
        />
        <Content>{children}</Content>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
