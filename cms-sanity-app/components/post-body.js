import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ content }) {
  return (
    <div className="relative z-10">
      <div className="md:max-w-3xl mx-auto -mt-10 md:-mt-32 p-6 md:p-16 bg-white shadow-lg my-12">
        <BlockContent blocks={content} className={markdownStyles.markdown} />
      </div>
    </div>
  );
}
