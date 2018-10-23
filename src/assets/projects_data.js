const TAGS = {
  vue: 'Vue',
  website: 'Website',
  pwa: 'PWA',
  api: 'API',
  react: 'React',
  db: 'database'
}

const projects_data = [
  {
    name: 'Landing Page',
    screenshot: 'https://picsum.photos/300/200',
    text: 'The landing page for our community.',
    tags: [TAGS.vue, TAGS.website]
  },
  {
    name: 'Something',
    screenshot: 'https://picsum.photos/301/200',
    text: 'A progressive web app created with react',
    tags: [TAGS.react, TAGS.pwa]
  },
  {
    name: 'And another',
    screenshot: 'https://picsum.photos/300/201',
    text: 'A database of our community members',
    tags: [TAGS.db, TAGS.api]
  },
  {
    name: 'Our fourth project',
    screenshot: 'https://picsum.photos/299/200',
    text: 'The landing page for our community.',
    tags: [TAGS.vue, TAGS.website]
  }
]

export default projects_data
