import React from 'react';
import SiteWrapper from '../../src/components/common/SiteWrapper';
import HelmetHead from '../../src/components/common/Seo';
import { BlogPostTemplate } from '../../src/components/blog/post/BlogPostTemplate';
import { HTMLContent } from '../../src/components/common/Content';

import blogRoll from '../../public/blog/summary.json';

const BlogPostPage = ({ post }) => {
    return (
        <SiteWrapper>
            <BlogPostTemplate
                content={post.bodyHtml}
                contentComponent={HTMLContent}
                description={post.description}
                helmet={<HelmetHead title={post.title} />}
                tags={post.tags}
                title={post.title}
                featuredimage={post.featuredimage}
            />
        </SiteWrapper>
    );
};

export const getStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { default: post } = await import(`../../public/blog/${slug}.json`);
    return { props: { post } };
};

export const getStaticPaths = async () => {
    const filePaths = Object.keys(blogRoll.fileMap);

    return {
        fallback: false,
        paths: filePaths.map((filePath) => ({ params: { slug: filePath.replace('public/blog/', '').replace('.json', '') } }))
    };
};

export default BlogPostPage;
