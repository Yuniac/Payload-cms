import { CollectionConfig } from "payload/types";

const Page: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      type: "text",
      name: "title",
      label: "Title",
      required: true,
    },
  ],
  timestamps: true,
  admin: { useAsTitle: "title" },
};

export default Page;
