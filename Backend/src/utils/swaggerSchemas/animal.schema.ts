export const AnimalInput = {
    type: 'object',
    properties: {
      cattleShed: {
        type: 'integer',
        example: 1,
      },
      type: {
        type: 'string',
        example: 'Cow',
      },
      healthCondition: {
        type: 'string',
        example: 'Good',
      },
      isProvideMilk: {
        type: 'boolean',
        example: true,
      },
      capacityOfMilkInLiters: {
        type: 'number',
        default: 0,
        example: 10,
      },
    },
    required: ['cattleShed', 'type', 'isProvideMilk'],
  };
  
  export const Animal = {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: 'animal_id_here',
      },
      cattleShed: {
        type: 'integer',
        example: 1,
      },
      type: {
        type: 'string',
        example: 'Cow',
      },
      healthCondition: {
        type: 'string',
        example: 'Good',
      },
      isProvideMilk: {
        type: 'boolean',
        example: true,
      },
      capacityOfMilkInLiters: {
        type: 'number',
        example: 10,
      },
      __v: {
        type: 'number',
        example: 0,
      },
    },
  };
  