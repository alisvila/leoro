import { Product } from "../models/Products";
import { Response, Request, NextFunction } from "express";

export const addToCart = (req: Request, res: Response, next: NextFunction) => {
  const prodId = req.body.productId;
  Product
    .findById(prodId)
    .then((product: any) => {
      // return req.user.addToCart(product);
    })
    .then((result: any) => {
      res.redirect("/cart");
    });
};

export const returnAll = async ( req:Request, res:Response, next:NextFunction ) => {
  try {
    const allProducts = await Product.find()
    res.json(allProducts)
  }
  catch (e) {
    res.status(400).send(e)
  }
}

export const newProduct = async (req: Request, res: Response) => {
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description
    })

    try {
      const savedProduct = await product.save()
      res.json(savedProduct)
    }
    catch (e) {
      res.status(400).send(e)
    }
      
}
