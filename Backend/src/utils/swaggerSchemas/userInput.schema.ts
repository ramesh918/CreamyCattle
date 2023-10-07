export const UserInput = {
  type: "object",
  properties: {
    username: {
      type: "string",
      example: "john_doe",
      description: "The username of the user",
    },
    password: {
      type: "string",
      example: "password123",
      description: "The password of the user",
    },
    role: {
      type: "string",
      example: "role_id_here",
    },
    firstName: {
      type: "string",
      example: "John",
      description: "The first name of the user",
    },
    lastName: {
      type: "string",
      example: "Doe",
      description: "The last name of the user",
    },
    adharNumber: {
      type: "string",
      example: "123456789012",
      description: "The unique Adhar number of the user",
    },
    email: {
      type: "string",
      example: "john@example.com",
      description: "The unique email address of the user",
    },
    adharImageURL: {
      type: "string",
      example: "https://example.com/adhar-image.jpg",
      description: "URL to the user's Adhar image",
    },
    profilePic: {
      type: "string",
      example: "https://example.com/profile-pic.jpg",
      description: "URL to the user's profile picture",
    },
  },
  required: [
    "username",
    "password",
    "firstName",
    "lastName",
    "adharNumber",
    "email",
  ],
};

export const User = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      example: "user_id_here",
      description: "The unique identifier of the user",
    },
    username: {
      type: "string",
      example: "john_doe",
      description: "The username of the user",
    },
    role: {
      type: "string",
      example: "role_id_here",
    },
    firstName: {
      type: "string",
      example: "John",
      description: "The first name of the user",
    },
    lastName: {
      type: "string",
      example: "Doe",
      description: "The last name of the user",
    },
    adharNumber: {
      type: "string",
      example: "123456789012",
      description: "The unique Adhar number of the user",
    },
    email: {
      type: "string",
      example: "john@example.com",
      description: "The unique email address of the user",
    },
    adharImageURL: {
      type: "string",
      example: "https://example.com/adhar-image.jpg",
      description: "URL to the user's Adhar image",
    },
    profilePic: {
      type: "string",
      example: "https://example.com/profile-pic.jpg",
      description: "URL to the user's profile picture",
    },
  },
};
