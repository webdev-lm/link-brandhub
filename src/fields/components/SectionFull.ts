import type { Block } from 'payload'
export const SectionFull: Block = {
    slug:'sectionFull',
    fields:[
        {
            name: 'imageFullWidth',
            type: 'upload',
            relationTo: 'media'
        }
    ],
}