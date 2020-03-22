import React from 'react';
import blogRoll from '../../public/blog/summary.json';
import BlogListPage from '../../src/components/blog/listPage/BlogListTemplate';
import SiteWrapper from '../../src/components/common/SiteWrapper';
import { IBlogRollPost } from '../../src/components/blog/listPage/IBlogRollPost';

const BlogIndexPage = () => {
    const filePaths = Object.keys(blogRoll.fileMap);
    const posts = filePaths.map((filePath) => {
        const id = filePath.replace('public/blog/', '').replace('.json', '');
        const blogRollPost = blogRoll.fileMap[filePath];
        blogRollPost.id = id;
        return blogRollPost as IBlogRollPost;
    });

    return (
        <SiteWrapper title={'Blog'}>
            <BlogListPage posts={posts} />
        </SiteWrapper>
    );
};

export default BlogIndexPage;
