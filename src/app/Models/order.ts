import { LatLng } from "leaflet";
import { cartItems } from "../cartItems";


export class Order{
  id!:number;
  items!: cartItems[];
  totalPrice!:number;
  Username!: string;
  address!: string;
  addressLatLng?:LatLng
  paymentId!: string;
  createdAt!: string;
  status!: string;
}