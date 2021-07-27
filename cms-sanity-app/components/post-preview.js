import Avatar from "../components/avatar/avatar";
import Date from "./date/date";
import CoverImage from "./cover-image";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  type,
  readTime,
}) {
  const router = useRouter();
  const handleLink = (e) => {
    e.preventDefault();
    // router.push(;
    window.location.assign(`${window.location.origin}/posts/${slug}`)
  };
  return (
    <div className="mb-16 min-preview-width ">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <div className="mb-3">
        <p className=" inline-block text-temp-green-500 text-sm">{type}</p>
        <p className=" inline-block float-right text-sm text-right">
          {`${readTime} mins | `} <Date dateString={date} />
        </p>
      </div>
      <hr className="divide-solid divider-green500" />
      <h3 className="text-3xl mb-3 leading-snug">
        <a href={`/posts/${slug}`} onClick={handleLink}>
          <a className="my-4 one-liner hover:underline font-serif text-lg lg:text-xl md:text-2xl text-temp-green-500">
            {title}
          </a>
        </a>
      </h3>
      <p className="three-liner text-md leading-relaxed mb-4 text-temp-primary h-20">
        {excerpt}
      </p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  );
}
