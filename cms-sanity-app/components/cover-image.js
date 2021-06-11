import cn from 'classnames'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ title, slug, image: source }) {
  const image = source ? (
    <img
      width={936}
      height={473}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small rounded-t-2xl mx-auto", {
        "hover:shadow-medium transition-shadow duration-200 rounded-t-2xl":
          slug,
      })}
      src={urlForImage(source).height(473).width(936).url()}
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
