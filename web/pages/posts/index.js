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

import styles from "./index.module.css";

export default function Posts({ data, preview }) {
  const { posts } = data;
  return (
    <>
      <h1>Writing</h1>
      {posts.map((post) => (
        <article key={post._id} className={styles.Article}>
          <h2>
            <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
              {post.title}
            </Link>
          </h2>
          <small>{formatDateTime(post.publishedAt)}</small>
          <PortableText blocks={post.teaser || []} />
        </article>
      ))}
    </>
  );
}

const query = groq`*[_type == "post" && defined(slug.current) && publishedAt < now()] {
  _id,
  "slug": slug.current,
  title,
  teaser,
  publishedAt
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
