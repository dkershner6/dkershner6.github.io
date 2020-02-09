const _ = require('lodash'); // eslint-disable-line @typescript-eslint/no-var-requires
const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem'); // eslint-disable-line @typescript-eslint/no-var-requires
const { fmImagesToRelative } = require('gatsby-remark-relative-images'); // eslint-disable-line @typescript-eslint/no-var-requires
import { technologies } from './src/data/technologies-node';

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
                component: path.resolve(`src/components/blog/${String(edge.node.frontmatter.templateKey)}.tsx`),
                // additional data can be passed via context
                context: {
                    id,
                },
            });
        });

        // Tag pages:
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach(edge => {
            if (_.get(edge, `node.frontmatter.tags`)) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => {
            const tagPath = `/blog/tags/${_.camelCase(tag)}/`;

            createPage({
                path: tagPath,
                component: path.resolve(`src/components/blog/TagRoute.tsx`),
                context: {
                    tag,
                },
            });
        });

        // Technology pages:
        technologies.forEach(technology => {
            const techPath = `/technologies/${technology.type}/${technology.id}`;
            const techId = technology.id;

            createPage({
                path: techPath,
                component: path.resolve(`src/components/technology/TechnologyTemplate.tsx`),
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
