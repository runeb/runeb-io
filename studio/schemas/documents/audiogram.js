import React from 'react';
import Icon from '../../components/Icon';

export default {
  title: 'Field recording',
  name: 'fieldRecording',
  type: 'document',
  icon: () => <Icon emoji="🎤" />,
  fields: [
    {
      type: "post",
      name: "book"
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // // will be ignored if slugify is set
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Recorded at',
      name: 'recordedAt',
      type: 'datetime',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Audio',
      name: 'audioFile',
      type: 'file',
      fields: [
        {
          name: 'Equipment',
          type: 'string',
          options: {
            list: ['Zoom H4n'],
          },
        },
      ],
    },
  ],
  liveEdit: false,
};
