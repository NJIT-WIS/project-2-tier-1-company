import Image from "next/image";
import { useEffect, useState } from "react";

const ImageFallback = (props) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    const currentLocation = window.location.href;
    const isDeployedOnGitHubPages = currentLocation.includes("github.io");

    //Update the image path resolution logic
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
