import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  // Update image src with relative URL if in development mode, or with absolute URL including basePath for GitHub Pages
  const isDev = process.env.NODE_ENV === 'development';
  const basePath = isDev ? '' : '/project-2-tier-1-company';
  const imageUrl = `${basePath}${imgSrc}`;

  return (
    <Image
      {...rest}
      src={imageUrl}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;
