import { Component , HostListener,AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-recommended-videos',
  imports: [CommonModule],
  templateUrl: './recommended-videos.component.html',
  styleUrl: './recommended-videos.component.css'
})
export class RecommendedVideosComponent implements OnInit{


  lectures = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false,isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false,isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false ,isInWishList: false},
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false,isInWishList: false },
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false,isInWishList: false },
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false ,isInWishList: false},

  ];

  constructor(private cartService: CartService, private wishlistService: WishlistService) {}
  ngOnInit() {
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


  private scrollContainer: HTMLElement | null = null;
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit() {
    this.scrollContainer = document.querySelector('.scroll-container');
  }

  // حركة الماوس
  onMouseMove(event: MouseEvent) {
    if (this.scrollContainer) {
      const { clientX } = event;
      const { offsetWidth, scrollWidth } = this.scrollContainer;
      const maxScroll = scrollWidth - offsetWidth;      const percentage = clientX / offsetWidth;
      this.scrollContainer.scrollLeft = maxScroll * percentage;
    }
  }

  // عند بدء التاتش
  onTouchStart(event: TouchEvent) {
    if (!this.scrollContainer) return;
    this.isDragging = true;
    this.startX = event.touches[0].pageX - this.scrollContainer.offsetLeft;
    this.scrollLeft = this.scrollContainer.scrollLeft;
  }

  // أثناء السحب بالتاتش
  onTouchMove(event: TouchEvent) {
    if (!this.scrollContainer || !this.isDragging) return;
    event.preventDefault();
    const x = event.touches[0].pageX - this.scrollContainer.offsetLeft;
    const walk = (x - this.startX) * 2; // التحكم في سرعة السحب
    this.scrollContainer.scrollLeft = this.scrollLeft - walk;
  }

  // عند إنهاء السحب
  onTouchEnd() {
    this.isDragging = false;
  }


}
