import React, { ReactElement } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import blogRoll from '../../../public/blog/summary.json';
import { IBlogRollPost } from '../../components/blog/listPage/IBlogRollPost';
import { BlogPostTemplate } from '../../components/blog/post/BlogPostTemplate';
import { HTMLContent } from '../../components/common/Content';
import SiteWrapper from '../../components/common/SiteWrapper';

const BlogPostPage = ({ post }: { post: IBlogRollPost }): ReactElement => {
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

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { default: post } = await import(`../../../public/blog/${slug}.json`);
    return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
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
