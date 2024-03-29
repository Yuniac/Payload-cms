import { CollectionConfig } from "payload/types";

const FormSubmission: CollectionConfig = {
  slug: "form-submissions",
  fields: [
    {
      type: "text",
      name: "from",
      label: "From Email",
      admin: { readOnly: true },
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      admin: { readOnly: true },
    },
    {
      type: "text",
      name: "soure",
      label: "Source",
      admin: { position: "sidebar", readOnly: true },
    },
  ],
  timestamps: true,
};

export default FormSubmission;
