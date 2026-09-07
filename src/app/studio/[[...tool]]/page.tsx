import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { projectId } from "@/sanity/env";

export const dynamic = "force-static";
export const metadata = { title: "Panel redakcyjny — DOLOMIT", robots: { index: false, follow: false } };
export { viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!projectId) return <main style={{ padding: 40, maxWidth: 700, margin: "auto" }}><h1>Panel redakcyjny DOLOMIT</h1><p>Brakuje konfiguracji Sanity. Ustaw NEXT_PUBLIC_SANITY_PROJECT_ID i NEXT_PUBLIC_SANITY_DATASET zgodnie z instrukcją w CMS.md, a następnie uruchom stronę ponownie.</p></main>;
  return <NextStudio config={config} />;
}
