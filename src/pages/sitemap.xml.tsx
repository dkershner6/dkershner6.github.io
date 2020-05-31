import React, { ReactElement } from 'react';
import { NextPageContext } from 'next';
import technologies from '../data/technologiesData';
import blogRoll from '../../public/blog/summary.json';
import pageList from '../../public/pagelist.json';

const createSitemap = (paths: string[]): string => {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${paths.map(
                (path) =>
                    `<url>
                    <loc>${`https://dkershner.com${path}`}</loc>
                </url>`
            )}
        </urlset>`;
};

const Sitemap = (): ReactElement => {
    return <p />;
};

export const getServerSideProps = async ({ res }: NextPageContext): Promise<{ props: Record<string, unknown> }> => {
    const postFilePaths = Object.keys(blogRoll.fileMap);

    const mappedPosts = postFilePaths.map((post) => {
        const slug = post.replace('public/blog/', '').replace('.json', '');
        return `/blog/${slug}`;
    });

    const allTagsUsed = postFilePaths.flatMap((filePath) => {
        const blogRollPost = blogRoll.fileMap[filePath];
        return blogRollPost.tags;
    });
    const uniqueTags = [...new Set(allTagsUsed)] as string[];
    const mappedTags = uniqueTags.map((tag) => `/blog/tags/${tag}`);

    const mappedTechnologies = technologies.map((technology) => `/technology/${technology.id}`);

    const pages = pageList;

    pages.push(...mappedPosts);
    pages.push(...mappedTags);
    pages.push(...mappedTechnologies);

    const mappedPages = pages
        .filter((page) => !page.endsWith('404.tsx') && !page.endsWith('].tsx'))
        .map((page) => {
            return page
                .replace('.tsx', '')
                .replace('.mdx', '')
                .replace('/index', '');
        });

    const sitemap = createSitemap(mappedPages);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
    return { props: {} };
};

export default Sitemap;
