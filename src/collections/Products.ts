import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    
  },
  access:{
    read:()=>true,
    create:()=>true,
    update:()=>true,
    delete:()=>true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'text' },
    { name: 'price', type: 'number' },
    {
      name: 'images',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
    },
    { name: 'categories', type: 'relationship', relationTo: 'categories' },
    { name: 'Subcategories', type: 'relationship', relationTo: 'subcategories' },
  ],
}
