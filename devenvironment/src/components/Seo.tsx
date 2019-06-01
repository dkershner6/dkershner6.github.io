import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetHead = props => {
  return (
    <Helmet>
      <title>{props.title || 'DKershner.com'}</title>
    </Helmet>
  );
};

export default HelmetHead;
