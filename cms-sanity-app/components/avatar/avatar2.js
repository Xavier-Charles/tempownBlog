import { urlForImage } from "../../lib/sanity";
import Date2 from "../date/date2";

export default function Avatar2({ name, picture, date, readTime }) {
  return (
    <div className="flex items-center">
      <div className="flex">
        <img
          src={urlForImage(picture).height(96).width(96).fit("crop").url()}
          className="w-12 h-12 rounded-full mr-4"
          alt={name}
        />
        <div className="flex flex-col justify-center">
          <div className="text-sm font-bold">{name}</div>
          <Date2 dateString={date} readTime={readTime} />
        </div>
      </div>
    </div>
  );
}
