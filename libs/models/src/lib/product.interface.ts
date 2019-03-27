export enum Categories {
  Computer = 'Computer',
  Printer = 'Printer'
}
export interface Product {
  _id: string;
  description: string;
  category: Categories;
  brand: string;
  price: number;
  stock: number;
}
