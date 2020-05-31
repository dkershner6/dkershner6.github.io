import React from 'react';
import _, { startCase } from 'lodash';
import blogRoll from '../../../../public/blog/summary.json';
import BlogListPage from '../../../components/blog/listPage/BlogListTemplate';
import SiteWrapper from '../../../components/common/SiteWrapper';
import { IBlogRollPost } from '../../../components/blog/listPage/IBlogRollPost';

interface IBlogIndexPage {
    tag: string;
}

const BlogIndexPage = ({ tag }: IBlogIndexPage) => {
    const filePaths = Object.keys(blogRoll.fileMap);
    const posts = filePaths
        .map((filePath) => {
            const id = filePath.replace('public/blog/', '').replace('.json', '');
            const blogRollPost = blogRoll.fileMap[filePath];
            blogRollPost.id = id;
            return blogRollPost as IBlogRollPost;
        })
        .filter((post) => post.tags.includes(tag));

    return (
        <SiteWrapper title={tag !== undefined ? `Blog - ${startCase(tag.toLowerCase())}` : 'Blog'}>
            <BlogListPage posts={posts} tag={tag} />
        </SiteWrapper>
    );
};

export const getStaticProps = async (ctx) => {
    const { tag } = ctx.params;
    return { props: { tag } };
};

export const getStaticPaths = async () => {
    const filePaths = Object.keys(blogRoll.fileMap);
    const posts = filePaths.map((filePath) => {
        const id = filePath.replace('public/blog/', '').replace('.json', '');
        const blogRollPost = blogRoll.fileMap[filePath];
        blogRollPost.id = id;
        return blogRollPost as IBlogRollPost;
    });
    const allTagsUsed = [...new Set(_.flatten(posts.map((post) => post.tags)))] as string[];

    return {
        fallback: false,
        paths: allTagsUsed.map((tag) => ({ params: { tag } }))
    };
};

export default BlogIndexPage;
