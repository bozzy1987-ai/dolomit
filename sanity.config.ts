"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { plPLLocale } from "@sanity/locale-pl-pl";
import { projectId, dataset } from "./src/sanity/env";
import { news } from "./src/sanity/news";

export default defineConfig({
  name: "dolomit",
  title: "DOLOMIT — panel redakcyjny",
  basePath: "/studio",
  projectId: projectId || "unconfigured",
  dataset,
  plugins: [structureTool(), plPLLocale()],
  schema: { types: [news] },
});
