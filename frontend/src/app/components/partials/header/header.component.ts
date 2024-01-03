import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity=0;
  user!:User;
  constructor(cartService:CartService,private userService:UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }

  ngOnInit(): void {
    console.log('isAuth value:', this.isAuth);
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return !!this.user.token;
  }

  
}
