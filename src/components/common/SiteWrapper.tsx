import React from 'react';

import GlobalContext, { initializeGlobalContext } from './GlobalContext';
import Layout from './Layout';

interface ISiteWrapper {
    children?: unknown;
}

const SiteWrapper = (props: ISiteWrapper) => {
    const { children } = props;
    return (
        <GlobalContext.Provider value={initializeGlobalContext()}>
            <Layout>{children}</Layout>
        </GlobalContext.Provider>
    );
};

export default SiteWrapper;
