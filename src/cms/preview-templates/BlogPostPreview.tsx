import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';

interface BlogPostPreviewProps {
  entry: {
    getIn: (any) => any;
  };
  widgetFor: (any) => any;
}

const BlogPostPreview = ({ entry, widgetFor }: BlogPostPreviewProps) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
  />
);

export default BlogPostPreview;
