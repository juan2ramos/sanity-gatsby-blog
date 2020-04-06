export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8a8196466243f88f7ac3e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3jagi396',
                  apiId: '12cf6915-08f3-40ed-98b7-e776b8f16644'
                },
                {
                  buildHookId: '5e8a81961d2998e34a470e41',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ogq48sit',
                  apiId: '1b6ab335-1bbc-4df8-a63b-0a04a8743214'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juan2ramos/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ogq48sit.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
