import { Channels, Solutions, Topics } from '@/fields/admin/MediaCategories'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  folders: true,
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: 'text',
      required: true,
    },
    {
      name:"description",
      type: 'text',
      required: true,
    },
    Channels,
    Solutions,
    Topics,


  ],
  upload: true,
}
