import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { parseISO, format } from "date-fns";
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText,
} from "../../lib/sanity";

import styles from "./Recipe.module.css";
import { setDayWithOptions } from "date-fns/fp";
import React from "react";

const postQuery = groq`
  *[_type == "recipe" && slug.current == $slug][0] {
    _id,
    title,
    intro,
    image,
    steps,
    "slug": slug.current
  }
`;

export default function Recipe({ data, preview }) {
  if (!data) return null;
  const router = useRouter();
  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post.slug },
    initialData: data,
    enabled: preview,
  });

  const { title, source, intro, image, steps } = post.post;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <article className={styles.Recipe}>
        <h2>{title}</h2>
        <small>{source}</small>
        <img
          src={urlFor(image).width(1000).height(250).fit("max").auto("format")}
        />
        <PortableText blocks={intro} />
        <div className={styles.Steps}>
          <ol>
            {steps.map((s) => (
              <React.Fragment key={s._key}>
                <li>{s.title}</li>
                <PortableText blocks={s.text} />
              </React.Fragment>
            ))}
          </ol>
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { post },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "recipe" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
