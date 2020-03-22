import React from 'react';
import { BlogPostTemplate } from '../../components/blog/post/BlogPostTemplate';

interface IBlogPostPreview {
    entry: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getIn: (any) => any;
    };
    widgetFor: (any) => unknown;
}

const BlogPostPreview = ({ entry, widgetFor }: IBlogPostPreview) => (
    <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
        featuredimage={entry.getIn(['data', 'featuredimage'])}
    />
);

export default BlogPostPreview;
