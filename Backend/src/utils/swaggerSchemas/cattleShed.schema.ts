export const CattleShedInput = {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        example: 'Farm 123',
      },
      manager: {
        type: 'string',
        example: 'manager_id_here',
      },
      address: {
        type: 'string',
        example: '123 Main Street',
      },
      city: {
        type: 'string',
        example: 'Cityville',
      },
      state: {
        type: 'string',
        example: 'Stateland',
      },
      pincode: {
        type: 'string',
        example: '12345',
      },
      country: {
        type: 'string',
        example: 'Countryland',
      },
    },
    required: ['location', 'manager', 'address', 'city', 'state', 'pincode', 'country'],
  };
  
  export const CattleShed = {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
      },
      location: {
        type: 'string',
      },
      manager: {
        type: 'string',
      },
      __v: {
        type: 'number',
      },
    },
  };
  