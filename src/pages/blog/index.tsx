import React from 'react';
import { graphql } from 'gatsby';
import BlogListPage from '../../components/blog/listPage/BlogListPage';

const BlogIndexPage = props => {
    const { data } = props;
    return <BlogListPage data={data} />;
};

export default BlogIndexPage;

export const pageQuery = graphql`
    query AllBlogQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "BlogPostTemplate" } } }) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
            nodes {
                excerpt(pruneLength: 400)
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    description
                    templateKey
                    date(formatString: "MMMM DD, YYYY")
                    tags
                    featuredpost
                    featuredimage {
                        childImageSharp {
                            fluid(maxWidth: 120, quality: 75) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
