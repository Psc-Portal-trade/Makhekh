import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RecentlyWishedListedComponent } from '../recently-wished-listed/recently-wished-listed.component';
import { SimilarCoursesComponent } from '../similar-courses/similar-courses.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { SecondNavComponent } from "../navbar/second-nav/second-nav.component";
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RecentlyWishedListedComponent, SimilarCoursesComponent,SecondNavComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private courseService: CourseService) {}

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

  checkout() {
    this.cartService.checkout(); // استدعاء checkout() من CartService
  }

}

