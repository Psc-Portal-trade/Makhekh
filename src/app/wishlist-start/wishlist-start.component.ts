import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { SimilarCoursesComponent } from "../similar-courses/similar-courses.component";

@Component({
  selector: 'app-wishlist-start',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './wishlist-start.component.html',
  styleUrl: './wishlist-start.component.css'
})
export class WishlistStartComponent implements OnInit{


  lectures: any[] = [];


  constructor(private cartService: CartService, private wishlistService: WishlistService) {}
  ngOnInit() {
    this.wishlistService.listItems$.subscribe(items => {
      this.lectures = items;
    });



    this.lectures.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lectures.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });


    this.lectures.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lectures.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });




  }



  addToCart(course: any) {
    this.cartService.addToCart(course);
    course.isInCart = true;
  }

  removeFromCart(course: any) {
    this.cartService.removeFromCart(course.id);
    course.isInCart = false;
  }

  addToWishList(course: any) {
    this.wishlistService.addToList(course);
    course.isInWishList = true;
  }

  removeFromWishList(course: any) {
    this.wishlistService.removeFromList(course.id);
    course.isInWishList = false;
  }





}
