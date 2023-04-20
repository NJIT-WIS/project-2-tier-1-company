/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={`/images/${imgSrc}`} // Update the image source to reference the relative path to the public/images folder
      fallback={`/images/${fallback}`} // Update the fallback image source to reference the relative path to the public/images folder
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;
