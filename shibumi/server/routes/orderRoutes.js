import express from "express";
import Order from "../models/orderModel.js";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post(
  "/order",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // console.log(req.body);
    // console.log(req.body.product.name);

    const newOrder = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      user: req.body.user._id,
    });
    console.log(newOrder.user);
    const order = await newOrder.save();
    res.status(201).send({ message: "New Order Created", order });
  })
);
orderRouter.get(
  "/order/mine",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.body.user._id });
    res.send(orders);
  })
);
orderRouter.get(
  "/order/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order not Found" });
    }
  })
);

orderRouter.put(
  "/order/:id/pay",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log(order.isPaid);
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updateOrder = await order.save();
      res.send({ message: "Order Paid", order: updateOrder });
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

export default orderRouter;
