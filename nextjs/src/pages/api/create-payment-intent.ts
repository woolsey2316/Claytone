// This is your test secret API key.
const stripe = require('stripe')('xxx_xxx_xxx');
const Express = require("express")
import { Send } from 'express-serve-static-core';

export interface TypedRequestBody<T> extends Express.Request {
  body: T
}

export interface TypedResponse<ResBody> extends Express.Response {
  json: Send<ResBody, this>;
}

const calculateOrderAmount = (items: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req: TypedRequestBody<{ items: any[], currency: string }>, res: TypedResponse<{clientSecret: string}>) {
  const { items, currency } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
};