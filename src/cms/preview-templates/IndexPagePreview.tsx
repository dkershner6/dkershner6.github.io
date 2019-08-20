import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

interface IndexPagePreviewProps {
  entry: {
    getIn: (any) => any;
  };
  getAsset: (any) => any;
}

const IndexPagePreview = ({ entry, getAsset }: IndexPagePreviewProps) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
