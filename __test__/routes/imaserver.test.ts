import request from 'supertest';
import app from '../../src/app';

it('Gets Favourites Succesfully', async () => {
  const response = await request(app())
    .get(`/`)
    .expect(200)
    .then((res) => res.text);

  //expect the transaction to have been fotten
  expect(response).toBe('im-a-service!');
});
