import React from 'react';
import Icon from '../../components/Icon';

export default {
  name: 'ingredient',
  title: 'Ingredients',
  type: 'document',
  icon: () => <Icon emoji="🥕" />,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
  ],
};
