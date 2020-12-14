import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function HolyMass({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <div>
      <h2> This Week's Holy Masses &amp; Services</h2>
    </div>
  );
}
