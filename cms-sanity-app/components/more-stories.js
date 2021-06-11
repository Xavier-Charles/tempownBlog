import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-12 row-gap-20 md:row-gap-32 mb-20">
        {posts.map((post) => (
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
