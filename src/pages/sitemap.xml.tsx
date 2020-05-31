import React, { ReactElement } from 'react';
import globby from 'globby';
import { NextPageContext } from 'next';
import technologies from '../data/technologiesData';
import blogRoll from '../../public/blog/summary.json';

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
    const posts = await globby(['content/**/*.md']);

    const mappedPosts = posts.map((post) => {
        const path = post.replace('content', '').replace('.md', '');
        return `/blog${path}`;
    });

    const filePaths = Object.keys(blogRoll.fileMap);
    const allTagsUsed = filePaths.flatMap((filePath) => {
        const blogRollPost = blogRoll.fileMap[filePath];
        return blogRollPost.tags;
    });
    const uniqueTags = [...new Set(allTagsUsed)] as string[];
    const mappedTags = uniqueTags.map((tag) => `/blog/tags/${tag}`);

    const mappedTechnologies = technologies.map((technology) => `/technology/${technology.id}`);

    const pages = await globby(['pages/**/*{.tsx,.mdx}', '!pages/_*.tsx', '!pages/api']);
    pages.push(...mappedPosts);
    pages.push(...mappedTags);
    pages.push(...mappedTechnologies);

    const mappedPages = pages
        .filter((page) => !page.endsWith('404.tsx') && !page.endsWith('].tsx'))
        .map((page) => {
            return page
                .replace('pages', '')
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
