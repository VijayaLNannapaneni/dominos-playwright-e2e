export const config = {
  baseUrl: 'https://www.dominos.com',
  testUser: {
    username: 'test@example.com',
    password: 'Password123!'
  },
  env: process.env.TEST_ENV || 'prod'
};