import { ObjectId } from "mongodb"

export interface IUser {
  username: string,
  password: string,
  resetToken: string,
  resetTokenExpiration: Date
}

export interface IProduct {
  title: string,
  price: number,
  desc: string,
  image: {}
}

export interface ICart {
  items: [
    {
      quantity: number,
      product: IProduct
    }
  ]
}

export interface ICategory {
  title: string,
  products: IProduct[]
}

export interface IPayment {
  orderID: ObjectId,
  amnt: number,
  provider: string,
  status: string
}

export interface IOrder {
  userID: ObjectId,
  products: IProduct[],
  paymentID: ObjectId,
  total: number
}