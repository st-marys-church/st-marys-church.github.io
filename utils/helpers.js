import SiteConfig from "@config/seo.json";

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

// following util was added as a workaround since Image class crash with image optimizers 
export function getImageUrl(url) {
  const isGhPages = process.env.GITHUB_WORKFLOW === 'gh-pages';
  if (isGhPages) {
    return '/st-marys-colombo4' + url;
  }
  else {
    return url;
  }
}
