import React from "react";
import Link from "next/link";
import { groq } from "next-sanity";
import { formatDateTime } from "../../lib/format";
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText,
} from "../../lib/sanity";

//import styles from "./index.module.css";

export default function Recipes({ data, preview }) {
  const { posts } = data;
  return (
    <>
      <h1>Foods</h1>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>
            <Link href={`/recipes/${encodeURIComponent(post.slug)}`}>
              {post.title}
            </Link>
          </h2>
        <small>{post.source}</small>
          <PortableText blocks={post.intro || []} />
        </article>
      ))}
    </>
  );
}

const query = groq`*[_type == "recipe" && defined(slug.current)] {
  _id,
  "slug": slug.current,
  source,
  title,
  intro
}`;

export async function getStaticProps({ params, preview = false }) {
  const posts = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      data: { posts },
    },
  };
}
