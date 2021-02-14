import algoliasearch from 'algoliasearch';
import sanityClient, { SanityDocumentStub } from '@sanity/client';
import { NowRequest, NowResponse } from '@vercel/node';
import indexer from 'sanity-algolia';

const algolia = algoliasearch('application-id', 'api-key');
const client = sanityClient({
  projectId: 'abcdef',
  dataset: 'production',
  useCdn: false,
});

const handler = async (req: NowRequest, res: NowResponse) => {
  const sanityAlgolia = indexer(
    {
      post: algolia.initIndex('docs'),
    },
    (document: SanityDocumentStub) => {
      return {
        title: document.title,
        slug: document.slug.current,
        excerpt: document.excerpt,
      };
    }
  );

  return sanityAlgolia
    .webhookSync(client, req.body)
    .then(() => res.status(200).send('OK'));
};

export default handler;
