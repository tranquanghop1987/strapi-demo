module.exports = {
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.368.999',
        title: 'DOCUMENTATION',
        description: '',
        termsOfService: 'https://cmcglobal.com.vn',
        contact: {
          name: 'CMCG',
          email: 'pthoang@cmcglobal.vn',
          url: 'https://cmcglobal.com.vn'
        },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        },
      },
      'x-strapi-config': {
        // Leave empty to ignore plugins during generation
        plugins: [ 'upload', 'users-permissions'],
        path: '/documentation',
      },
      servers: [
        {
          "url": "https://strapi-backend-demo-84315734ec99.herokuapp.com/api",
          "description": "UAT server"
        },
        {
          "url": "http://pthoang-g3:1337/api",
          "description": "Dev server"
        },
        {
          "url": "http://localhost:1337/api",
          "description": "Local server"
        }
      ],
      externalDocs: {
        description: 'Find out more',
        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
      },
      security: [ { bearerAuth: [] } ]
    }
  }
}
