export default {
    name: "photo",
    type: "document",
    title: "Photo",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "medium",
        type: "string",
        title: "Medium",
      },
      {
        title: "Date",
        name: "date",
        type: "date",
        options: {
          dateFormat: "YYYY",
          calendarTodayLabel: "Today",
        },
      },
      {
        title: "Image",
        name: "image",
        type: "image",
        options: {
          hotspot: true, // <-- Defaults to false
        },
      },
      {
        title: "Image URL",
        name: "imageUrl",
        type: "url",
      },
    ],
  };
  