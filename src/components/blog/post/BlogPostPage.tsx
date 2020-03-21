import React from 'react';
import SiteWrapper from '../../common/SiteWrapper';
import { HTMLContent } from '../../common/Content';
import HelmetHead from '../../common/Seo';
import '../../../css/github-markdown.css';

import { BlogPostTemplate } from './BlogPostTemplate';

interface IData {
    markdownRemark: any;
}

interface IBlogPostPage {
    data: IData;
}

const BlogPostPage = ({ data }: IBlogPostPage) => {
    const { markdownRemark: post } = data;

    return (
        <SiteWrapper>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={<HelmetHead title={post.frontmatter.title} />}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                featuredimage={post.frontmatter.featuredimage}
            />
        </SiteWrapper>
    );
};

export default BlogPostPage;
