import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { BlogPostTemplate } from '../blog-post';
import { HTMLContent } from '../../components/Content';
import HelmetHead from '../../components/Seo';

const post = {
    html: '<p></p>',
    frontmatter: {
        description: 'Test description',
        tags: ['testtag1', 'testtag2'],
        title: 'Test Title',
        featuredimage: 'test',
    },
};

it('Should render blog post', () => {
    render(
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={<HelmetHead title={post.frontmatter.title} />}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            featuredimage={post.frontmatter.featuredimage}
        />
    );

    expect(screen.getByTestId('title')).toHaveTextContent(post.frontmatter.title);
});
