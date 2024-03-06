import { CollectionConfig } from "payload/types";
import { Slug } from "../shared/slug";

const Category: CollectionConfig = {
  slug: "categories",
  fields: [
    Slug,
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
  ],
};

export default Category;
