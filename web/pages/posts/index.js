import Link from "next/link"
import {groq} from 'next-sanity'
import {getClient} from "../../lib/sanity"

export default function Posts({data, preview}) {
  const {posts} = data
  return (
    <>
      <h1>All the posts</h1>
      {posts.map(post => (
        <Link key={post._id} href={`/posts/${post.slug}`}>{post.title}</Link>
      ) )}
    </>
  );
}

const query = groq`*[_type == "post" && defined(slug.current)]{
  _id,
  "slug": slug.current,
  title
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
