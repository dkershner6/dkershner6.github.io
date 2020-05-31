import React, { ReactElement } from 'react';
import globby from 'globby';
import path from 'path';
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
    const contentBasePath = path.join(process.cwd(), 'content');
    const posts = await globby([`${contentBasePath}/**/*.md`]);

    const mappedPosts = posts.map((post) => {
        const path = post.replace(contentBasePath, '').replace('.md', '');
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

    const pagesBasePath = path.join(process.cwd(), 'src', 'pages');
    const pages = await globby([`${pagesBasePath}/**/*{.tsx,.mdx}`, `!${pagesBasePath}/*.xml.tsx`, `!${pagesBasePath}/_*.tsx`, `!${pagesBasePath}/api`]);

    pages.push(...mappedPosts);
    pages.push(...mappedTags);
    pages.push(...mappedTechnologies);

    const mappedPages = pages
        .filter((page) => !page.endsWith('404.tsx') && !page.endsWith('].tsx'))
        .map((page) => {
            return page
                .replace(pagesBasePath, '')
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
