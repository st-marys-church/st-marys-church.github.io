import Link from "next/link";
import { Layout, Bio, SEO } from "@components/common";
import { HolyMass } from "@components/main";
import { getImageUrl } from "../utils/helpers";
import { getHomePageSections } from "@utils/posts";
import ReactMarkdown from "react-markdown/with-html";
import { Image } from "../components/common";


export default function Home({ left, right }) {

  return (
    <Layout>
      <SEO title="Home" />
      <div class="row">
        <div class="col-6">
          {left.map((section) => {
            return <div className="home-section">
              <ReactMarkdown
                escapeHtml={false}
                source={section.content}
                renderers={{ image: MarkdownImage }}
              />
            </div>;
          })}
        </div>
        <div class="col-6">
          {right.map((section) => {
            return <div className="home-section">
              <ReactMarkdown
                escapeHtml={false}
                source={section.content}
                renderers={{ image: MarkdownImage }}
              />
            </div>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: getHomePageSections() };
}

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../content/assets/${src}`)}
    webpSrc={require(`../content/assets/${src}?webp`)}
    previewSrc={require(`../content/assets/${src}?lqip`)}
    className="w-full"
  />
);
