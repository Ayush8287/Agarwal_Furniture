import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'label',
  },
  access:{
    read:()=>true,
    create:()=>true,
    update:()=>true,
    delete:()=>true,
  },
  fields: [{ name: 'label', type: 'text', required: true },{name:'subcategories',type:'relationship',relationTo:'subcategories',hasMany:true}],
}
