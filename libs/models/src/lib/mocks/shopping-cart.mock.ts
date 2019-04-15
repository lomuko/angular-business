import { Categories } from '../product.interface';

export const shoppingCartMock = {
  _id: 'aRandom_Id',
  items: [
    {
      product: {
        _id: 'A-1',
        description: 'iMac',
        category: Categories.Computer,
        brand: 'Apple',
        price: 3000,
        stock: 10
      },
      quantity: 1
    }
  ],
  client: '',
  status: `created at ${new Date().toISOString()}`
};
