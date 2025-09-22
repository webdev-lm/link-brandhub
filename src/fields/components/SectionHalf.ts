import type { Block } from 'payload'

export const SectionHalf: Block = {
    slug: 'sectionHalf',
    fields:[
        {
            name: 'imageOne',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'imageTwo',
            type: 'upload',
            relationTo: 'media'
        },
    ],

}