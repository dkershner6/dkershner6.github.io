const fs = require('fs');
const path = require('path');

const globby = require('globby');

const generateSitemap = async () => {
    const pages = await generatePageList();
    const mappedPages = pages
        .filter((page) => !page.endsWith('404.tsx') && !page.endsWith('].tsx'))
        .map((page) => {
            return page
                .replace('.tsx', '')
                .replace('.mdx', '')
                .replace('/index', '');
        });

    const sitemap = createSitemap(mappedPages);

    fs.writeFileSync('public/sitemap.xml', sitemap);
};

const generatePageList = async () => {
    const pagesBasePath = path.join(process.cwd(), 'src', 'pages');
    const pages = await globby([
        `${pagesBasePath}/**/*{.tsx,.mdx}`,
        `!${pagesBasePath}/*.xml.tsx`,
        `!${pagesBasePath}/_*.tsx`,
        `!${pagesBasePath}/api`
    ]);
    return pages.map((page) => page.replace(pagesBasePath, ''));
};

const createSitemap = (paths) => {
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

module.exports = generateSitemap;
