import Avatar from '../components/avatar/avatar'
import Date from './date/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type,
  readTime
}) {
  return (
    <div className="mb-16">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <div className="mb-3">
        <p className=" inline-block text-temp-green-500 text-sm">
          {type}
        </p>
        <p className=" inline-block float-right text-sm text-right">
          {`${readTime} mins | `} <Date dateString={date} />
        </p>
      </div>
      <hr className="divide-solid divider-green500" />
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="my-4 one-liner hover:underline font-serif text-lg lg:text-xl md:text-2xl text-temp-green-500">
            {title}
          </a>
        </Link>
      </h3>
      <p className="text-md leading-relaxed mb-4 text-temp-primary">
        {excerpt}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
