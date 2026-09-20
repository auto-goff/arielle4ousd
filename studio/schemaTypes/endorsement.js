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
      name: 'placement',
      title: 'Placement',
      type: 'string',
      initialValue: 'list',
      options: {
        list: [
          {title: 'Name only (Also endorsed by)', value: 'list'},
          {title: 'Photo in grid', value: 'grid'},
          {title: 'Photo + quote on home page', value: 'featured'},
        ],
        layout: 'radio',
      },
      validation: (Rule) =>
        Rule.custom((placement, context) => {
          if ((placement === 'grid' || placement === 'featured') && !context.document?.photo) {
            return 'This placement shows a photo, but no photo is set.'
          }
          return true
        }).warning(),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) =>
        Rule.custom((quote, context) => {
          if (context.document?.placement === 'featured' && !quote) {
            return 'Featured endorsements usually include a quote.'
          }
          return true
        }).warning(),
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
