import type { Field } from 'payload'

export const Channels: Field = {
  name:"channels",
  hasMany:true,
  type: 'select',
  required:true,
  options: [
   {label:"SMS",value:"sms"},
   {label:"Email",value:"email"},
   {label:"RCS",value:"rcs"},
   {label:"WhatsApp",value:"whatsapp"},
  ],
}

export const Solutions: Field = {
  name:"solutions",
  hasMany:true,
  type: 'select',
  required:true,
  options: [
  { value: "mylink-connect", label: "MyLINK Connect" },
  { value: "mylink-engage", label: "MyLINK Engage" },
  { value: "mylink-marketing-platform", label: "MyLINK Marketing Platform" },
  { value: "mylink-studio", label: "MyLINK Studio" },
  { value: "mylink-payment", label: "MyLINK Payment" },
  { value: "mylink-lookup", label: "MyLINK LookUp" },
  { value: "mylink-sender-id", label: "Sender ID" },
  { value: "mylink-shortcodes", label: "Shortcodes" },
  { value: "mylink-virtual-longnumbers", label: "Virtual Long Numbers" },
  { value: "mylink-integrations", label: "Integrations" },
  ],
}

export const Topics: Field = {
  name:"topics",
  hasMany:true,
  type: 'select',
  options: [
  { value: "black-friday", label: "Black Friday" },
  { value: "webinars", label: "Webinars" },
  { value: "christmas", label: "Christmas" },
  { value: "summer", label: "Summer" },
  { value: "easter", label: "Easter" },
  { value: "valentines", label: "Valentine's" },
  { value: "awards", label: "Awards" },
  ],
}
