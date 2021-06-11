import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ content }) {
  return (
    <div className="relative z-10">
      <div class="max-w-3xl mx-auto -mt-32 p-16 bg-white shadow-lg my-20">
        <BlockContent blocks={content} className={markdownStyles.markdown} />
      </div>
    </div>
  );
}
