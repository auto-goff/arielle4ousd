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
        'Optional. A headshot works best. Any size is fine — it gets resized automatically. ' +
        'Adding a photo (with no quote) shows this person in the photo grid instead of the plain name list.',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      description:
        'Optional. Adding a quote shows this person with their photo (or initials, if no photo) and ' +
        'the quote, above everyone who only has a photo or just a name.',
    },
    {
      name: 'onHomepage',
      title: 'Show on homepage',
      type: 'boolean',
      initialValue: false,
      description:
        'Everyone appears automatically on the full Endorsements page, grouped by quote / photo / name ' +
        'only. Check this to ALSO feature them on the homepage.',
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
      description:
        'Lower numbers appear first within their group (quote / photo / name only). Leave blank to sort ' +
        'alphabetically.',
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
