import { CollectionConfig, Field } from "payload/types";
import { formatSlug } from "../../utils/formatSlug";

export const Slug: Field = {
  name: "slug",
  label: "Page Slug",
  type: "text",
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [formatSlug],
  },
};
