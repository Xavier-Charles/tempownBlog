import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PostsProvider } from "../context/postsContext";

export default function Index({ allPosts, preview }) {
  return (
    <>
      <PostsProvider allPosts={allPosts}>
        <Layout preview={preview}>
          <Container>
            <Intro />
            {allPosts.length > 0 && <MoreStories />}
          </Container>
        </Layout>
      </PostsProvider>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
  };
}
