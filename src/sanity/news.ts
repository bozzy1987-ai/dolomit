import { defineArrayMember, defineField, defineType } from "sanity";

const altField = defineField({
  name: "alt", title: "Opis zdjęcia", type: "string",
  description: "Opisz, co przedstawia zdjęcie — dla osób korzystających z czytników ekranu.",
  validation: (rule) => rule.required(),
});

export const news = defineType({
  name: "news",
  title: "Aktualności",
  type: "document",
  initialValue: () => ({ publishedAt: new Date().toISOString(), category: "Firma" }),
  fields: [
    defineField({ name: "title", title: "Tytuł", type: "string", validation: (rule) => rule.required().max(160) }),
    defineField({
      name: "slug", title: "Adres wpisu", type: "slug",
      description: "Kliknij Generuj po wpisaniu tytułu. Po publikacji zachowaj adres, aby linki do wpisu nadal działały.",
      options: { source: "title", maxLength: 100 },
      validation: (rule) => rule.required().custom((value) => !value?.current || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current) ? true : "Użyj małych liter, cyfr i myślników."),
    }),
    defineField({ name: "publishedAt", title: "Data wpisu", type: "datetime", description: "Data widoczna przy wpisie. Wpis pojawi się na stronie po kliknięciu Opublikuj.", validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Kategoria", type: "string", options: { list: ["Firma", "Rolnictwo", "Ogłoszenia", "Współpraca", "Historia"] }, validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Krótki opis", type: "text", rows: 3, description: "Tekst na karcie w aktualnościach (maksymalnie 350 znaków).", validation: (rule) => rule.required().max(350) }),
    defineField({ name: "mainImage", title: "Zdjęcie główne", type: "image", options: { hotspot: true }, fields: [altField] }),
    defineField({
      name: "body", title: "Treść aktualności", type: "array", validation: (rule) => rule.required().min(1),
      of: [defineArrayMember({
        type: "block",
        styles: [{ title: "Tekst", value: "normal" }, { title: "Nagłówek", value: "h2" }, { title: "Podtytuł", value: "h3" }, { title: "Cytat", value: "blockquote" }],
        marks: {
          decorators: [{ title: "Pogrubienie", value: "strong" }, { title: "Kursywa", value: "em" }],
          annotations: [{
            name: "link", type: "object", title: "Odnośnik",
            fields: [{ name: "href", type: "url", title: "Adres", validation: (rule) => rule.required().uri({ scheme: ["http", "https", "mailto", "tel"] }) }],
          }],
        },
      })],
    }),
    defineField({ name: "gallery", title: "Galeria zdjęć", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true }, fields: [altField] })] }),
    defineField({
      name: "links", title: "Przydatne linki (np. oferty OLX)", type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "label", title: "Nazwa linku", type: "string", validation: (rule) => rule.required() }),
          defineField({ name: "href", title: "Adres URL", type: "url", validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }) }),
        ],
      })],
    }),
  ],
  orderings: [{ title: "Najnowsze", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "mainImage" } },
});
