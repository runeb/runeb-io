export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'title', // title_without_series
      type: 'string',
      title: 'Title'
    },
    {
      title: 'ISBN',
      name: 'isbn',
      type: 'string'
    },
    {
      title: 'ISBN13',
      name: 'isbn13',
      type: 'string'
    },
    {
      title: 'Publish date',
      name: 'publishDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'today'
      }
    },
    {
      title: 'Page count',
      name: 'pageCount',
      type: 'number'
    },
    {
      title: 'Cover Image URL',
      name: 'coverImageUrl',
      type: 'url'
    },
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Format',
      name: 'format',
      type: 'string'
    },
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Publisher',
      name: 'publisher',
      type: 'string'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'authorReference' }]
    }
  ]
}
