import SiteConfig from "@config/seo.json";
import { useRouter } from 'next/router'

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

//useRouter();

// following util was added as a workaround since Image class crash with image optimizers 
export function getImageUrl(url) {
  const router = useRouter();
  return router.basePath + url;
}
