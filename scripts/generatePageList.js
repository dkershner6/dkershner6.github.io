const globby = require('globby');
const fs = require('fs');
const path = require('path');

const generatePageList = async () => {
    const pagesBasePath = path.join(process.cwd(), 'src', 'pages');
    const pages = await globby([`${pagesBasePath}/**/*{.tsx,.mdx}`, `!${pagesBasePath}/*.xml.tsx`, `!${pagesBasePath}/_*.tsx`, `!${pagesBasePath}/api`]);
    const pagePaths = pages.map((page) => page.replace(pagesBasePath, ''));
    fs.writeFileSync('public/pagelist.json', JSON.stringify(pagePaths));
};

module.exports = generatePageList;
