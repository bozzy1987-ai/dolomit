import { PortableText, type PortableTextBlock } from "@portabletext/react";

export function ArticleBody({ body, content }: { body?: PortableTextBlock[]; content?: string }) {
  if (body) return <PortableText value={body} components={{
    block: {
      normal: ({ children }) => <p className="text-stone-600 leading-relaxed mb-4">{children}</p>,
      h2: ({ children }) => <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">{children}</h3>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-amber-500 pl-5 italic text-stone-600 my-6">{children}</blockquote>,
    },
    list: { bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 text-stone-600 space-y-2">{children}</ul>, number: ({ children }) => <ol className="list-decimal pl-6 mb-4 text-stone-600 space-y-2">{children}</ol> },
    marks: { link: ({ value, children }) => {
      const href = typeof value?.href === "string" && /^(https?:\/\/|mailto:|tel:)/i.test(value.href) ? value.href : undefined;
      return href ? <a href={href} className="text-amber-700 underline underline-offset-4">{children}</a> : <>{children}</>;
    } },
  }} />;
  return <>{content?.split("\n\n").map((paragraph, index) => <p key={index} className="text-stone-600 leading-relaxed mb-4 whitespace-pre-line">{paragraph}</p>)}</>;
}
