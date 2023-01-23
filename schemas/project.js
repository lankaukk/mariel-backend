export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'medium',
      type: 'string',
      title: 'Medium',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Image URLs',
      name: 'images',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      title: 'Video URL',
      name: 'video',
      type: 'url',
    },
  ],
}
