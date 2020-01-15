import { log } from 'util';

const product = {
  label: 'Red notebook',
  price: 1000,
  stock: 5
};

// const { label: productLabel, price, stock = 6 } = product;

const transaction = (type, { label, price }) => {
  console.log(type, label, price);
};

transaction('order', product);
