import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
import { HolyMass } from "@components/main";

export default function Home() {
  return (
    <Layout>
      <SEO title="All posts" />
      <HolyMass />
    </Layout>
  );
}