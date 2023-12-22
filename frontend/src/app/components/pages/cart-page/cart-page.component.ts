import { Component } from '@angular/core';
import { Cart } from '../../../shared/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }
  
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString); void
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
