const review = {
  name: "review",
  title: "Reviews",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: 'string'
        },
        {
          name: "artist",
          title: "Artist",
          type: 'string'
        },
      ],
    },
    {
      name: 'artcontent',
      title: 'ArtContent',
      type: 'array',
      of: [{ type: 'block' }],


    },
    {
        name: 'url',
        title: 'URL',
        type: 'url',

    },
    {
      name: "author",
      title: "Author",
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],


    },
    {
      name: 'searchTags',
      title: 'SearchTags',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
};


export default review;