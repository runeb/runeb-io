import React from 'react';
import Icon from '../../components/Icon';

export default {
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  icon: () => <Icon emoji="👨‍🍳" />,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      type: "slug",
      name: "slug",
      options: {
        source: "title"
      },
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "source"
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      type: "array",
      name: "intro",
      of: [{type: "block"}]
    },
    {
      type: "array",
      name: "ingredients",
      of: [{type: "ingredientUsage"}]
    },
    {
      type: "array",
      name: "steps",
      of: [{type: "recipeStep"}]
    }
  ],
};
