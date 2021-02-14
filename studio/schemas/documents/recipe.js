import React from 'react';
import Icon from '../../components/Icon';

export default {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  icon: () => <Icon emoji="👨‍🍳" />,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage',
    },
  ],
};
