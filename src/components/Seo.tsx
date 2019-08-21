import React from 'react';
import { Helmet } from 'react-helmet';

interface HelmetHeadProps {
  title: string;
}

const HelmetHead = (props: HelmetHeadProps) => {
  const { title } = props;
  return <Helmet titleTemplate={`${title} | %s`} />;
};

export default HelmetHead;
