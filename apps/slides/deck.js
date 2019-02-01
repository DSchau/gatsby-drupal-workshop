import Intro from './topics/01-intro.mdx';
import React from './topics/02-react.mdx';
import Gatsby from './topics/03-gatsby.mdx';
import Drupal from './topics/04-drupal.mdx';
import GatsbyNode from './topics/05-gatsby-node.mdx';
import GatsbyImage from './topics/06-gatsby-image.mdx';
import SEO from './topics/07-seo.mdx';
import Deploying from './topics/08-deploying.mdx';
import WrapUp from './topics/99-wrap-up.mdx';

import './fonts/Webfonts/futurapt_book_macroman/stylesheet.css';
import './fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css';
import './fonts/Webfonts/futurapt_demi_macroman/stylesheet.css';
import './fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css';
import 'typeface-space-mono';
import 'typeface-spectral';

export { default as theme } from 'gatsby-mdx-theme';
export default [
  ...Intro,
  ...React,
  ...Gatsby,
  ...Drupal,
  ...GatsbyNode,
  ...GatsbyImage,
  ...SEO,
  ...Deploying,
  ...WrapUp,
];
