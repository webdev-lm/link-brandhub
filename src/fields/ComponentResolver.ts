import type { Field } from 'payload'
import { SectionFull } from './components/SectionFull'
import { SectionHalf } from './components/SectionHalf'

export const ComponentResolver: Field = {
    admin:{isSortable:true},
    name: 'componentResolver',
    type:'blocks',
    blocks:[SectionFull, SectionHalf]
}