import React from "react";
import Img from "gatsby-image";

interface ImageInfo {
  alt?: string;
  childImageSharp?: any;
  image?: string | any;
  style?: any;
}

interface PreviewCompatibleImageProps {
  imageInfo: ImageInfo;
}

const PreviewCompatibleImage = ({ imageInfo }: PreviewCompatibleImageProps) => {
  const imageStyle = { borderRadius: "5px", maxHeight: "175px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;
