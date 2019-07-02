import React from "react";
import { Helmet } from "react-helmet";

interface HelmetHeadProps {
  title: string;
}

const HelmetHead = (props: HelmetHeadProps) => {
  return (
    <Helmet>
      <title>{props.title || "DKershner.com"}</title>
    </Helmet>
  );
};

export default HelmetHead;
