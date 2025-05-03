import type { GlobalConfig } from 'payload'

export const Banner: GlobalConfig = {
  slug: 'banner',
  access:{
    read:()=>true,
    update:()=>true,
  },
  fields: [ {
    name: 'images',
    type: 'array',
    fields: [{ name: 'title', type: 'text' },{name:'description',type:'text'},{ name: 'image', type: 'upload', relationTo: 'media' }],
  }],
}
