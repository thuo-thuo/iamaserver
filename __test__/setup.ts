import mongoose, { Connection } from 'mongoose';
import jwt from 'jsonwebtoken';
//define a global interface that is accessible to every test

beforeAll(async () => {
  jest.setTimeout(10000);
});

//before each test
beforeEach(async () => {
  //clear mocked functions and reset them
  jest.clearAllMocks();
});

//after all tests
afterAll(async () => {});

//global function to pass domain to tests.
