import Product from "../models/Product";
import { Response, Request, NextFunction } from "express";
import APIFeatures from '../utils/ApiFeatures';


export const getAll = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const features = new APIFeatures(Product.find(), Product, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const products = await features.query;

    const total = await features.count().total;

    res.status(200).json({ data: { total, count: products.length, products } });
  } catch (error) {
    res.status(500).json({ message: 'Error in getting products' });
  }
};

export const getProduct = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const features = new APIFeatures(Product.find(), Product, req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const products = await features.query;

    const total = await features.count().total;

    res.status(200).json({ data: { total, count: products.length, products } });
  } catch (error) {
    res.status(500).json({ message: 'Error in getting products' });
  }
};

export const returnAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const newProduct = async (req: Request, res: Response) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const specificPost = async (req: Request, res:Response,) => {
  try {
    console.log(req.params.productId)
  }
  catch (e) {
    res.status(400).send(e)
  }
}
