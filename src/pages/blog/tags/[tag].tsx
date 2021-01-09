import React, { ReactElement } from 'react';

import startCase from 'lodash.startcase';
import { GetStaticPaths, GetStaticProps } from 'next';

import blogRoll from '../../../../public/blog/summary.json';
import BlogListPage from '../../../components/blog/listPage/BlogListTemplate';
import { IBlogRollPost } from '../../../components/blog/listPage/IBlogRollPost';
import SiteWrapper from '../../../components/common/SiteWrapper';

interface IBlogIndexPage {
    tag: string;
}

const mapFilePathsToBlogPost = (filePaths: string[]): IBlogRollPost[] =>
    filePaths.map((filePath) => {
        const id = filePath.replace('public/blog/', '').replace('.json', '');
        const blogRollPost = blogRoll.fileMap[filePath];
        blogRollPost.id = id;
        return blogRollPost as IBlogRollPost;
    });

const BlogIndexPage = ({ tag }: IBlogIndexPage): ReactElement => {
    const filePaths = Object.keys(blogRoll.fileMap);
    const posts = mapFilePathsToBlogPost(filePaths).filter((post) =>
        post.tags.includes(tag)
    );

    return (
        <SiteWrapper
            title={
                tag !== undefined
                    ? `Blog - ${startCase(tag.toLowerCase())}`
                    : 'Blog'
            }
        >
            <BlogListPage posts={posts} tag={tag} />
        </SiteWrapper>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { tag } = ctx.params;
    return { props: { tag } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const filePaths = Object.keys(blogRoll.fileMap);
    const posts = mapFilePathsToBlogPost(filePaths);

    const allTagsUsed = [
        ...new Set(posts.map((post) => post.tags).flat())
    ] as string[];

    return {
        fallback: false,
        paths: allTagsUsed.map((tag) => ({ params: { tag } }))
    };
};

export default BlogIndexPage;
