const createSwaggerDefinition = () => {
  return {
    openapi: '3.0.0',
    info: {
      title: 'Chat',
      version: '2.0.0',
      description: 'Chat usando Angular e Node.js',
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            lastName: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
          },
          required: ['name', 'lastName', 'email', 'password'],
        },
      },
    },
  };
};

module.exports = createSwaggerDefinition;
