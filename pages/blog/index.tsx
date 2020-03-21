import React from 'react';
import BlogListPage from '../../src/components/blog/listPage/BlogListPage';

const BlogIndexPage = props => {
    const { data } = props;
    return <BlogListPage data={data} />;
};

export default BlogIndexPage;
