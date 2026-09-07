"use client";

export default function NewsError({ reset }: { reset: () => void }) {
  return <section className="max-w-3xl mx-auto px-6 py-20"><h1 className="text-3xl font-bold mb-4">Nie udało się wczytać aktualności</h1><p className="mb-6">Spróbuj ponownie za chwilę.</p><button onClick={reset} className="bg-stone-800 text-white px-6 py-3">Spróbuj ponownie</button></section>;
}
