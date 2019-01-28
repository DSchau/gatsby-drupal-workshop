import React from 'react';

import Code from './code';

export default {
  pre: props => {
    if (props.children.props.name === 'code') {
      // mdxTag has children prop, which is source code
      // mdxTagProps.props is the props to pass to `code`, including meta props
      const mdxTagProps = props.children.props;
      let lang = `markup`;
      if (mdxTagProps.props.className) {
        const match = mdxTagProps.props.className.match(/language-([a-z]*)/);
        if (match && match[1]) {
          lang = match[1];
        }
      }
      return (
        <Code is="block" {...mdxTagProps} {...mdxTagProps.props} lang={lang} />
      );
    } else {
      return <pre {...props} />;
    }
  },
};
