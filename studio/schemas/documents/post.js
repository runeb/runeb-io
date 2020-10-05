import Book from 'react-icons/lib/md/book';

export default {
  name: 'post',
  type: 'document',
  icon: Book,
  title: 'Post',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
