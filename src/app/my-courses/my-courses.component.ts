import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { SecondNavComponent } from "../navbar/second-nav/second-nav.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule, SecondNavComponent, FormsModule],
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: any[] = [];
  lectures: any[] = [];
  private _searchQuery: string = '';
  private _searchQueryWishlist: string = '';

  // Pagination settings
  currentPage: number = 1;
  currentPageWishlist: number = 1;
  itemsPerPage: number = 6;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courseService.purchasedCourses$.subscribe(courses => {
      this.courses = courses;
    });

    this.wishlistService.listItems$.subscribe(items => {
      this.lectures = items.map(course => this.updateCourseState(course));
    });

    this.cartService.cartItems$.subscribe(() => this.updateLecturesState());
    this.wishlistService.listItems$.subscribe(() => this.updateLecturesState());
  }

  // البحث في الكورسات المشتراة
  set searchQuery(value: string) {
    this._searchQuery = value;
    this.currentPage = 1;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  get filteredCourses() {
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get paginatedCourses() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCourses.slice(start, start + this.itemsPerPage);
  }

  // البحث في قائمة الأمنيات
  set searchQueryWishlist(value: string) {
    this._searchQueryWishlist = value;
    this.currentPageWishlist = 1;
  }

  get searchQueryWishlist(): string {
    return this._searchQueryWishlist;
  }

  get filteredWishlistCourses() {
    return this.lectures.filter(course =>
      course.title.toLowerCase().includes(this.searchQueryWishlist.toLowerCase())
    );
  }

  get paginatedWishlistCourses() {
    const start = (this.currentPageWishlist - 1) * this.itemsPerPage;
    return this.filteredWishlistCourses.slice(start, start + this.itemsPerPage);
  }

  // تحديث حالة الكورسات
  private updateCourseState(course: any) {
    return {
      ...course,
      isInCart: this.cartService.isItemInCart(course.id),
      isInWishList: this.wishlistService.isItemInList(course.id)
    };
  }

  private updateLecturesState() {
    this.lectures = this.lectures.map(course => this.updateCourseState(course));
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

  // Pagination for My Courses
  nextPage() {
    if (this.currentPage < Math.ceil(this.filteredCourses.length / this.itemsPerPage)) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages() {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }

  getPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  // Pagination for Wishlist
  nextPageWishlist() {
    if (this.currentPageWishlist < Math.ceil(this.filteredWishlistCourses.length / this.itemsPerPage)) {
      this.currentPageWishlist++;
    }
  }

  prevPageWishlist() {
    if (this.currentPageWishlist > 1) {
      this.currentPageWishlist--;
    }
  }

  get totalPagesWishlist() {
    return Math.ceil(this.filteredWishlistCourses.length / this.itemsPerPage);
  }

  getPagesArrayWishlist() {
    return Array.from({ length: this.totalPagesWishlist }, (_, i) => i + 1);
  }

  goToPageWishlist(page: number) {
    this.currentPageWishlist = page;
  }
}
