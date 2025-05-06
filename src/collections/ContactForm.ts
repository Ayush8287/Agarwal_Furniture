import type { CollectionConfig } from 'payload'

export const ContactForm: CollectionConfig = {
  slug: 'contactform',
  access:{
    create:()=>true,
  },
  admin: {
    useAsTitle: 'name', // Shows 'name' in list view
  },
  fields: [{ name: 'name', type: 'text', required: true },{ name: 'phone', type: 'text', required: true },{ name: 'email', type: 'text', required: true },{ name: 'message', type: 'text'}],
}
