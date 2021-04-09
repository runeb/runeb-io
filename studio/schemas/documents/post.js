import React from 'react';
import Icon from '../../components/Icon';

export default {
  name: 'post',
  type: 'document',
  icon: () => <Icon emoji="👨‍💻" />,
  title: 'Writings',
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
      validation: (Rule) => Rule.required(),
    },
    {
      type: "datetime",
      name: "publishedAt"
    },
    {
      title: 'Teaser',
      name: 'teaser',
      type: 'bodyText',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'bodyText',
    },
  ],
};
