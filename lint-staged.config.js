module.exports = {
  '*.js': [
    'eslint --ignore-path .gitignore --ignore-path .prettierignore --fix',
    'git add',
  ],
  '*.{md,mdx,yaml}': ['prettier --write', 'git add'],
};
