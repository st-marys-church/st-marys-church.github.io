import "lazysizes";
import { getImageUrl } from "../../../utils/helpers";

export function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <img
        className={`lazyload blur ${className} img-content`}
        alt={alt}
        src={webpSrc}
      />
    </picture>
  );
}
