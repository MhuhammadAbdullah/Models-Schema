import Order from '../models/order.model.js';

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate('user').populate('products.product');
  res.json(orders);
};

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};