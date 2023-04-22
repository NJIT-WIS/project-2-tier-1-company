import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  // Update image src with absolute URL that includes base URL for GitHub Pages
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ''}${imgSrc}`;

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
