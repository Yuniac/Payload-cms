import { GlobalConfig } from "payload/types";

const MegaMenu: GlobalConfig = {
  slug: "mega-menu",
  fields: [
    {
      type: "array",
      name: "links",
      label: "Links",
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "target",
              label: "Tab Target",
              type: "select",
              options: [
                { label: "self", value: "_self" },
                { label: "blank", value: "_blank" },
              ],
            },
            {
              name: "origin",
              label: "Tab Origin",
              type: "select",
              options: [
                { label: "local", value: "local" },
                { label: "external", value: "external" },
              ],
              defaultValue: "local",
            },
          ],
        },
        {
          name: "page",
          label: "Page to link to",
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            condition: (fullDoc, sibilingData) =>
              sibilingData.origin === "local",
          },
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          admin: {
            condition: (fullDoc, sibilingData) =>
              sibilingData.origin !== "local",
          },
        },
      ],
    },
  ],
};

export default MegaMenu;
