import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { indexQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'


export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Container>
          <Intro />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPosts, preview },
  }
}
