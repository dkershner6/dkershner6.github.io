import React from 'react';
import { render } from '@testing-library/react';

import BlogListTemplate from './BlogListTemplate';

const posts = [
    {
        id: 'azure-functions-consumption-vs-app-service-vs-kubernetes',
        templateKey: 'BlogPostTemplate',
        title: 'Azure Functions: Consumption vs App Service Plan vs Kubernetes',
        date: '2019-02-26T15:04:00.000Z',
        description: 'When to choose which for optimal cost',
        featuredpost: false,
        featuredimage: '/img/servers.jpg',
        tags: ['azureFunctions', 'azure', 'kubernetes'],

        preview:
            'Note\n\nThis comparison applies to functions on v2 (.Net Core). There is a large difference in performance',
        dir: 'public/blog',
        base: 'azure-functions-consumption-vs-app-service-vs-kubernetes.json',
        ext: '.json',
        sourceBase:
            'azure-functions-consumption-vs-app-service-vs-kubernetes.md',
        sourceExt: '.md'
    }
];

it('Should render BlogListPage', () => {
    const { container } = render(<BlogListTemplate posts={posts} />);

    expect(container.querySelector('h1')).toBeTruthy();
});
