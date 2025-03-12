import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RecentlyWishedListedComponent } from '../recently-wished-listed/recently-wished-listed.component';
import { SimilarCoursesComponent } from '../similar-courses/similar-courses.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-shipping-cart',
  imports: [CommonModule, RecentlyWishedListedComponent, SimilarCoursesComponent, NavbarComponent],
  templateUrl: './shipping-cart.component.html',
  styleUrl: './shipping-cart.component.css'
})
export class ShippingCartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateTotalPrice();
    });
  }
  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this.updateTotalPrice();

  }


  updateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
