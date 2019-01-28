const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = function onCreateNode({
  actions: { createNodeField },
  node,
  getNode,
}) {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
    });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async function createPages({
  actions: { createPage },
  graphql,
}) {
  const result = await graphql(`
    {
      labs: allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors;
    }
    return res.data;
  });

  const labTemplate = require.resolve(`./src/templates/lab.js`);

  result.labs.edges
    .filter(({ node }) => node.fields.slug !== `/`)
    .forEach(({ node }) => {
      const { slug } = node.fields;
      createPage({
        component: labTemplate,
        path: slug,
        context: {
          slug: slug,
        },
      });
    });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
        path.join(__dirname, `..`, `..`, `node_modules`), // yarn workspace!
      ],
      alias: { src: path.resolve(__dirname, 'src') },
    },
  });
};
