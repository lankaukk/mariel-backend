export default {
  name: 'project_photos',
  type: 'document',
  title: 'Project Photos',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Image URL',
      name: 'imageUrl',
      type: 'url',
    },
  ],
}
