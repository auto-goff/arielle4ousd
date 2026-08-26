export default {
  name: 'endorsement',
  title: 'Endorsement',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Title or affiliation',
      type: 'string',
      description:
        'This shows under the name, e.g. "Parent, Glenview Elementary" or "OUSD Teacher, retired"',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'Optional. A headshot works best. Any size is fine — it gets resized automatically.',
    },
    {
      name: 'featured',
      title: 'Show photo in the top grid',
      type: 'boolean',
      initialValue: false,
      description: 'Leave off to appear in the plain text list below the grid.',
    },
    {
      name: 'published',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
      description: 'Turn off to hide this endorsement without deleting it.',
    },
    {
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first. Leave blank to sort alphabetically.',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
}
