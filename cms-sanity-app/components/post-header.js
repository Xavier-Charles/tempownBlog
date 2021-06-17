import { useEffect, useState } from "react";
import Avatar2 from "../components/avatar/avatar2";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  readTime,
  type,
}) {
  return (
    <div className="px-0 md:px-20 md:px-30 lg:px-40">
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12"> */}
      <div className="">
        <div className="grid grid-cols-12 ">
          <div className="col-start-1 col-span-12 md:col-span-4">
            <Avatar2
              name={author.name}
              picture={author.picture}
              date={date}
              read
              readTime={readTime}
            />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-end-13">
            <SocialShareLink />
          </div>
        </div>
        <div className="-mt-5 md:my-6 text-temp-green-500">
          <p>{type}</p>
        </div>
      </div>

      <hr className="md:hidden divide-solid divider-green500 mb-5 md:m-4 md:mx-40" />

      <div className="mb-8 md:mb-16 sm:mx-0 -mx-6 md:mx-0">
        <CoverImage title={title} image={coverImage} />
      </div>
    </div>
  );
}

const SocialShareLink = () => {
  const [postURL, setPostURL] = useState("");

  useEffect(() => {
    setPostURL(window.location.href);
  }, [])

  return (
    <div className="relative flex flex-wrap items-center mt-6 md:mt-2 justify-end w-full text-sm text-temp-gray">
      <div className="hidden md:block pb-6 md:pb-0 text-temp-green-500">
        Share on:{" "}
      </div>
      <div className="flex flex-row w-6/12 justify-end">
        <a
          href={`https://twitter.com/intent/tweet?url=${postURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1.5 marginx2"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M16.2603 3.96297C16.2718 4.13192 16.2718 4.3009 16.2718 4.46984C16.2718 9.62288 12.5345 15.5604 5.70376 15.5604C3.59934 15.5604 1.64444 14.9207 0 13.8105C0.298998 13.8467 0.586457 13.8588 0.896959 13.8588C2.63336 13.8588 4.23181 13.2433 5.50826 12.1934C3.87533 12.1572 2.50688 11.0349 2.0354 9.49015C2.2654 9.52633 2.49538 9.55048 2.73689 9.55048C3.07037 9.55048 3.40388 9.50218 3.71434 9.41775C2.01242 9.05568 0.735938 7.48685 0.735938 5.59217V5.54391C1.2304 5.83355 1.80542 6.01456 2.41485 6.03867C1.41439 5.33871 0.758946 4.14399 0.758946 2.79236C0.758946 2.06829 0.942904 1.40455 1.26491 0.825278C3.09334 3.19061 5.84174 4.7353 8.92357 4.90428C8.86609 4.61464 8.83158 4.31297 8.83158 4.01126C8.83158 1.86313 10.4875 0.113281 12.5459 0.113281C13.6154 0.113281 14.5813 0.583934 15.2598 1.34422C16.0992 1.17528 16.9042 0.849423 17.6172 0.402916C17.3412 1.30804 16.7547 2.06833 15.9843 2.55102C16.7318 2.46658 17.4562 2.24931 18.1232 1.94764C17.6173 2.71996 16.9848 3.40781 16.2603 3.96297Z"
              fill="#08A05C"
            />
          </svg>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${postURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1.5 marginx2"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.9"
              d="M18.5337 1.04868V17.9676C18.5337 18.5492 18.0847 19.0163 17.5345 19.0163H12.9147V11.6543H15.2691L15.621 8.78425H12.9107V6.95013C12.9107 6.11798 13.1291 5.55331 14.2658 5.55331H15.7141V2.98469C15.4633 2.95073 14.6057 2.87006 13.6024 2.87006C11.515 2.87006 10.083 4.20744 10.083 6.66567V8.78425H7.72047V11.6543H10.083V19.0205H1.40972C0.859556 19.0205 0.410522 18.5492 0.410522 17.9718V1.04868C0.410522 0.471267 0.859556 0 1.40972 0H17.5304C18.0847 0 18.5337 0.471267 18.5337 1.04868Z"
              fill="#08A05C"
            />
          </svg>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${postURL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1.5 marginx2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="18"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              opacity="0.9"
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              fill="#08A05C"
            />
          </svg>
        </a>

        <a
          href={`mailto:reciever@example.com?&subject=&cc=&bcc=&body=${postURL}%0A`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1.5 marginx2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="18"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              opacity="0.9"
              d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
              fill="#08A05C"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
