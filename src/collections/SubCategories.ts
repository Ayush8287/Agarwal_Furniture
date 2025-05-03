import type { CollectionConfig } from 'payload'

export const SubCategories: CollectionConfig = {
  slug: 'subcategories',
  admin: {
    useAsTitle: 'label',
  },
  access:{
    read:()=>true,
    create:()=>true,
    update:()=>true,
    delete:()=>true,
  },
  fields: [{ name: 'label', type: 'text', required: true }],
}
