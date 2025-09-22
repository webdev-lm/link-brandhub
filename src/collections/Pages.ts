import { ComponentResolver } from '@/fields/ComponentResolver'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
    slug: 'pages',
    folders: true,
    admin: {
        defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: 'text',
            required: true
        },
        {
            name: "slug",
            type: 'text',
            required: true
        },
        {
            name: "status",
            type: 'select',
            defaultValue: 'draft',
            options: [
                {label: 'Draft', value: 'draft'},
                {label: 'Published', value: 'published'}
            ]
        },
        {
            name: "description",
            type: 'text',
            required: true
        },
        ComponentResolver
    ]
}