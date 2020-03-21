import React from 'react';
import BlogListPage from './BlogListPage';

const TagRoute = props => {
    const { data } = props;
    const tag = props.pageContext.tag;
    return <BlogListPage data={data} tag={tag} />;
};

export default TagRoute;
