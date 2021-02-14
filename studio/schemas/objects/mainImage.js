export default {
  type: 'image',
  name: 'mainImage',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'Caption',
      type: 'string',
      title: 'Attribution',
    },
  ],
};
