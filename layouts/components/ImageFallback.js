import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    const isDeployedOnGitHubPages = process.env.NODE_ENV === "production" && window.location.hostname.includes("github.io");
    const resolvedSrc = isDeployedOnGitHubPages ? `/project-2-tier-1-company${src}` : src;
    setImgSrc(resolvedSrc);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default ImageFallback;
