/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      fallback={imgSrc}
      onError={() => {
        setImgSrc(imgSrc);
      }}
    />
  );
};

export default ImageFallback;
