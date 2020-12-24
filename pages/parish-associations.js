import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

import { Layout, Image, SEO, Bio } from "@components/common";
import { getMainSection } from "@utils/posts";

export default function Post({ post, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-6xl font-black leading-none font-display">
            {frontmatter.title}
          </h1>
          <p className="text-sm">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          className="mb-4 prose lg:prose-lg dark:prose-dark"
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage, link: LinkRenderer }}
        />
        <hr className="mt-4" />
      </article>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = getPostsSlugs();

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps() {
  const postData = getMainSection('parish-associations');

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../content/assets/${src}`)}
    webpSrc={require(`../content/assets/${src}?webp`)}
    previewSrc={require(`../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

function LinkRenderer(props) {
  return <Link href={props.href}><a>{props.children}</a></Link>
}
