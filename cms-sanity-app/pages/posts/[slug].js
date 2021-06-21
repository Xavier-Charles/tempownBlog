import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { urlForImage, usePreviewSubscription } from "../../lib/sanity";
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from "../../lib/sanity.server";
import { PostsProvider } from "../../context/postsContext";

export default function Post({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.post?.slug;
  console.log(slug);
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <PostsProvider allPosts={morePosts}>
      {console.log(post.title)}
      <Layout preview={preview}>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>{post.title} | TempOwn Blog</title>
                  {post.coverImage && (
                    <meta
                      key="ogImage"
                      property="og:image"
                      content={urlForImage(post.coverImage)
                        .width(1200)
                        .height(627)
                        .fit("crop")
                        .url()}
                    />
                  )}
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  readTime={post.readTime}
                  type={post.type}
                />
                <PostBody content={post.content} />
              </article>
              {/* <SectionSeparator /> */}
              <div>
                <h1 className="text-center mx-8 my-16 font-serif font-normal text-temp-green-500 text-4xl md:text-6.5xl leading-tight md:pr-8">
                  Similar Articles
                </h1>
              </div>
              {morePosts.length > 0 && <MoreStories />}
            </>
          )}
        </Container>
      </Layout>
    </PostsProvider>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
