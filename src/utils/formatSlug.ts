import { FieldHook } from "payload/types";

// 'value' is this field's specific incoming value
// 'data' is all of the incoming values for the document
export const formatSlug: FieldHook = async ({ value, data }) => {
  // return formatted version of title if exists, else return unmodified value
  return data?.title?.replace(/ /g, "-").toLowerCase() ?? value;
};
