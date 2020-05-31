import React from 'react';
import getSiteMetadata, { ISiteMetadata } from './SiteMetadata';

interface IGlobalContext {
    siteMetadata: ISiteMetadata;
}

const initialSiteMetadata = getSiteMetadata() || {
    siteUrl: undefined,
    title: undefined,
    description: undefined
};

export const initializeGlobalContext = (): IGlobalContext => ({
    siteMetadata: initialSiteMetadata
});

const GlobalContext = React.createContext(initializeGlobalContext());

export default GlobalContext;
