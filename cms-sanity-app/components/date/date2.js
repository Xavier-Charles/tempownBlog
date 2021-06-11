import { parseISO, format } from "date-fns";

export default function Date2({ dateString, readTime }) {
  const date = parseISO(dateString);
  return (
    <p className="text-sm">
      {`${readTime} mins read | `}
      <time dateTime={dateString}>{format(date, "LLL	d, yy")}</time>
    </p>
  );
}
