const _ = require('lodash'); // eslint-disable-line @typescript-eslint/no-var-requires
const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem'); // eslint-disable-line @typescript-eslint/no-var-requires
const { fmImagesToRelative } = require('gatsby-remark-relative-images'); // eslint-disable-line @typescript-eslint/no-var-requires
const { technologies } = require('./src/data/technologies'); // eslint-disable-line @typescript-eslint/no-var-requires

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Technology pages:
    technologies.forEach(technology => {
      const techPath = `/technologies/${technology.type}/${technology.id}`;
      const techId = technology.id;

      createPage({
        path: techPath,
        component: path.resolve(`src/templates/technologies.tsx`),
        context: {
          techId,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
