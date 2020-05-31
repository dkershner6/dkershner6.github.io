import React from 'react';
import SiteWrapper from '../../components/common/SiteWrapper';
import { BlogPostTemplate } from '../../components/blog/post/BlogPostTemplate';
import { HTMLContent } from '../../components/common/Content';

import blogRoll from '../../../public/blog/summary.json';

const BlogPostPage = ({ post }) => {
    return (
        <SiteWrapper title={post.title}>
            <BlogPostTemplate
                content={post.bodyHtml}
                contentComponent={HTMLContent}
                description={post.description}
                tags={post.tags}
                title={post.title}
                featuredimage={post.featuredimage}
            />
        </SiteWrapper>
    );
};

export const getStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { default: post } = await import(`../../../public/blog/${slug}.json`);
    return { props: { post } };
};

export const getStaticPaths = async () => {
    const filePaths = Object.keys(blogRoll.fileMap);

    return {
        fallback: false,
        paths: filePaths.map((filePath) => ({
            params: {
                slug: filePath.replace('public/blog/', '').replace('.json', '')
            }
        }))
    };
};

export default BlogPostPage;
