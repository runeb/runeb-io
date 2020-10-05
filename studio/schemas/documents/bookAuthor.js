export default {
  name: 'bookAuthor',
  type: 'document',
  title: 'Book Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    // https://www.sanity.io/docs/schema-types/number-type
    {
      title: 'Goodreads ID',
      name: 'externalId',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
