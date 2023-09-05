export const RoleInput = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            example: 'Administrator',
        },
        permissions: {
            type: 'array',
            items: {
                type: 'string',
            },
            example: ['read', 'write'],
        },
    },
};  

export const Role = {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6151f03c1842d61d61e7a7d0',
      },
      name: {
        type: 'string',
        example: 'Administrator',
      },
      permissions: {
        type: 'array',
        items: {
          type: 'string',
        },
        example: ['read', 'write'],
      },
    },
  };
  