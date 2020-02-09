import React from 'react';
import { BlogPostTemplate } from '../../components/blog/BlogPostTemplate';

interface IBlogPostPreview {
    entry: {
        getIn: (any) => any;
    };
    widgetFor: (any) => any;
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
