import React from 'react';
import { graphql } from 'gatsby';
import BlogListPage from './BlogListPage';

const TagRoute = props => {
    const { data } = props;
    const tag = props.pageContext.tag;
    return <BlogListPage data={data} tag={tag} />;
};

export default TagRoute;

export const pageQuery = graphql`
    query BlogRollTagQuery($tag: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "BlogPostTemplate" }, tags: { in: [$tag] } } }
        ) {
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
