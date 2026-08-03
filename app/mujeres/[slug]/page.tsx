import Image from "next/image";
import { notFound } from "next/navigation";
import {
  contentfulImageUrl,
  getAllPostSlugs,
  getPostBySlug,
} from "../../../lib/contentful";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Post({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const fields = post.fields as any;
  const paragraphs = String(fields.body || "")
    .split("\n")
    .filter((p) => p !== "");
  const mid = Math.ceil(paragraphs.length / 2);
  const heroUrl = contentfulImageUrl(fields.heroImage?.fields?.file?.url);
  const fotoViejaUrl = contentfulImageUrl(
    fields.fotoVieja?.fields?.file?.url
  );
  const foto3Url = contentfulImageUrl(fields.foto3?.fields?.file?.url);

  return (
    <article className="prose prose-xl mx-auto mt-10">
      <h1 className="font-serif text-center">{fields.title}</h1>
      <h2 className="text-center">{fields.subtitle || ""}</h2>

      {heroUrl && (
        <div className="relative w-full aspect-square border p-2 rounded-lg shadow not-prose">
          <Image
            className="object-cover rounded-lg"
            src={heroUrl}
            alt={fields.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      )}

      {fields.audio && (
        <audio controls>
          <source
            src={`https:${fields.audio.fields.file.url}`}
            type="audio/mp3"
          />
        </audio>
      )}

      {paragraphs.slice(0, mid).map((p, index) => (
        <p key={`a-${index}`} dangerouslySetInnerHTML={{ __html: p }} />
      ))}

      {fotoViejaUrl && (
        <div className="relative w-full aspect-square border p-2 rounded-lg shadow not-prose">
          <Image
            className="object-cover rounded-lg"
            src={fotoViejaUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      )}

      {paragraphs.slice(mid).map((p, index) => (
        <p key={`b-${index}`} dangerouslySetInnerHTML={{ __html: p }} />
      ))}

      {foto3Url && (
        <div className="relative w-full aspect-square border p-2 rounded-lg shadow not-prose">
          <Image
            className="object-cover rounded-lg"
            src={foto3Url}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      )}

      {fields.enlace && (
        <a href={fields.enlace} target="_blank" rel="noopener noreferrer">
          Ver página de {fields.title}
        </a>
      )}
    </article>
  );
}
