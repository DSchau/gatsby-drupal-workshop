import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import codeTheme from 'prism-react-renderer/themes/vsDarkPlus';

const prismMap = {
  sh: 'bash',
  shell: 'bash',
};

export default ({ children, lang }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={codeTheme}
      code={children.trim()}
      language={prismMap[lang] || lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          css={{ overflow: 'auto', padding: '1rem', marginTop: '1.5rem' }}
        >
          {tokens.map((line, i) => (
            <div key="fake-key" {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key="fake-key" {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
