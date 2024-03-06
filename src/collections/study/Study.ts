import { CollectionConfig } from "payload/types";
import { Slug } from "../shared/slug";

const Study: CollectionConfig = {
  slug: "study",
  fields: [
    {
      type: "text",
      label: "Sub Title",
      name: "sub_title",
      hooks: {
        afterChange: [
          (args) => {
            console.log(args.data);
          },
        ],
      },
    },
    {
      type: "text",
      label: "Title",
      name: "title",
      required: true,
    },
    Slug,
    {
      name: "client",
      label: "Client",
      type: "text",
      admin: { position: "sidebar" },
      required: true,
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      admin: { position: "sidebar" },
    },
    {
      name: "meta",
      label: "Page Meta",
      type: "group",
      fields: [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "keywords", label: "Keywords", type: "text" },
      ],
    },
    {
      name: "image",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: { position: "sidebar" },
    },
  ],
};

export default Study;
