import React from 'react';

import GlobalContext, { initializeGlobalContext } from './GlobalContext';
import Layout from './Layout';

interface ISiteWrapper {
    title?: string;
    children?: unknown;
}

const SiteWrapper = (props: ISiteWrapper) => {
    const { children, title } = props;
    return (
        <GlobalContext.Provider value={initializeGlobalContext()}>
            <Layout title={title}>{children}</Layout>
        </GlobalContext.Provider>
    );
};

export default SiteWrapper;
