import mongoose, { Schema, Document } from "mongoose";

interface CartItem {
  foodId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface Cart extends Document {
  userId: string;
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

const CartItemSchema = new Schema<CartItem>({
  foodId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
});

const CartSchema = new Schema<Cart>({
  userId: { type: String, required: true, unique: true },
  items: [CartItemSchema],
  totalPrice: { type: Number, required: true },
  totalQuantity: { type: Number, required: true },
});

export const CartModel = mongoose.model<Cart>("Cart", CartSchema);
