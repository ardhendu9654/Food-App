import { cartItems } from "./cartItems";

export class cart{
    items:cartItems[]=[];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;  
        });
        return totalPrice;
    }
}