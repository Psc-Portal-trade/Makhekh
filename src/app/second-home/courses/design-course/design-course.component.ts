import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from "../courses.component";
import { SecondNavComponent } from "../../../navbar/second-nav/second-nav.component";
import { FooterComponent } from "../../../footer/footer.component"; // استيراد FormsModule لاستخدام [(ngModel)]
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-design-course',
  imports: [CommonModule, FormsModule, CoursesComponent, SecondNavComponent],
  templateUrl: './design-course.component.html',
  styleUrl: './design-course.component.css'
})
export class DesignCourseComponent implements OnInit{

  private _searchQuery: string = ''; // تخزين قيمة البحث داخليًا
  currentPage = 1;
  itemsPerPage = 6;

  lectures = [
    { id: 76, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 77, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 78, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 79, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 80, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 81, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 82, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 83, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 84, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 85, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 86, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },

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

  set searchQuery(value: string) {
    this._searchQuery = value;
    this.currentPage = 1; // إعادة ضبط الصفحة عند تغيير البحث
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  get filteredCourses() {
    return this.lectures.filter(course =>
      course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get paginatedCourses() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCourses.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
  }

}
