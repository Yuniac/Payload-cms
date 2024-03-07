import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import FormSubmission from "./collections/form/FormSubmissions";
import Users from "./collections/Users";
import Study from "./collections/study/Study";
import Category from "./collections/category/Category";
import Media from "./collections/media/Media";
import MegaMenu from "./globals/MegaMenu";
import Page from "./collections/page/Page";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Page, Study, Category, FormSubmission, Media],
  typescript: { outputFile: path.resolve(__dirname, "payload-types.ts") },
  db: mongooseAdapter({ url: process.env.DATABASE_URI }),
  globals: [MegaMenu],
});
