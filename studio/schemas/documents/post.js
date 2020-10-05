import Book from 'react-icons/lib/md/book';

export default {
  name: 'post',
  type: 'document',
  icon: Book,
  title: 'Post',
  fields: [
    {
      title: 'Title',
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
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyText'
    },
  ],
};
