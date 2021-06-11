// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: "post",
      type: "document",
      title: "Post",
      fields: [
        {
          name: "type",
          title: "Post Type",
          type: "string",
          options: {
            list: [
              { title: "What's New", value: "What's New" },
              { title: "Product Guide", value: "Product Guide" },
              { title: "Product Update", value: "Product Update" },
              { title: "White paper", value: "White paper" },
              { title: "Analysis", value: "Analysis" },
            ],
          },
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "readTime",
          title: "Estimated Reading time (in mins)",
          type: "number",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
          },
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "excerpt",
          title: "Excerpt",
          type: "string",
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
        },
        {
          name: "date",
          title: "Date",
          type: "datetime",
        },
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },

    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "picture",
          title: "Picture",
          type: "image",
        },
      ],
    },
  ]),
});
