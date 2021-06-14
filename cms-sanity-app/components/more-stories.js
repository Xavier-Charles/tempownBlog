import { useContext } from 'react'
import PostPreview from '../components/post-preview'
import PostsContext from '../context/postsContext'

export default function MoreStories() {
  const Posts = useContext(PostsContext)
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-12 row-gap-20 md:row-gap-32 mb-5">
        {Posts.posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            type={post.type}
            readTime={post.readTime}
          />
        ))}
      </div>
    </section>
  )
}
