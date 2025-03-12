import { Component, OnInit } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-secondary-section-home',
  imports: [TranslocoPipe,CommonModule],
  templateUrl: './secondary-section-home.component.html',
  styleUrl: './secondary-section-home.component.css'
})
export class SecondarySectionHomeComponent implements OnInit{


  lecturesJS = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false,isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false,isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false},
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},

  ];
  lecturesReact = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
  ];
  lecturesAngylar = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
  ];

  lecturesJava = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
  ];
  lecturesAndroud = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
  ];

  lecturesCSS = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
  ];
  lecturesWEB = [
    { id: 1, title: 'How the internet works', rate: 5, src: 'assets/course1.png', watched: '(1.5k)', price: 4000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 2, title: 'The Complete PHP Full', rate: 2.5, src: 'assets/course2.png', watched: '(450)', price: 3500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>' ,isInCart: false, isInWishList: false},
    { id: 3, title: 'Pre Programming everything you need', rate: 3, src: 'assets/course3.png', watched: '(950)', price: 1000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 4, title: 'The Complete PHP Full', rate: 4, src: 'assets/course1.png', watched: '(1k)', price: 2000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
    { id: 5, title: 'Pre Programming everything you need', rate: 2, src: 'assets/course2.png', watched: '(800)', price: 2500, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false, isInWishList: false },
    { id: 6, title: 'How the internet works', rate: 5, src: 'assets/course3.png', watched: '(1.2k)', price: 5000, describtion: 'Youaccet Training', stars: '<i class="fa-solid fa-star"></i>',isInCart: false , isInWishList: false},
  ];


  constructor(private cartService: CartService, private wishlistService: WishlistService) {}
  ngOnInit() {

    this.lecturesJS.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesJS.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });

    this.lecturesReact.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesReact.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });


    this.lecturesAngylar.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesAngylar.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });


    this.lecturesJava.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesJava.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });


    this.lecturesAndroud.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesAndroud.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });

    this.lecturesCSS.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesCSS.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });



    this.lecturesWEB.forEach(course => {
      course.isInCart = this.cartService.isItemInCart(course.id);
    });

    this.cartService.cartItems$.subscribe(() => {
      this.lecturesWEB.forEach(course => {
        course.isInCart = this.cartService.isItemInCart(course.id);
      });
    });




















    this.lecturesJS.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesJS.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });

    this.lecturesReact.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesReact.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });


    this.lecturesAngylar.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesAngylar.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });


    this.lecturesJava.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesJava.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });


    this.lecturesAndroud.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesAndroud.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });

    this.lecturesCSS.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesCSS.forEach(course => {
        course.isInWishList = this.wishlistService.isItemInList(course.id);
      });
    });



    this.lecturesWEB.forEach(course => {
      course.isInWishList = this.wishlistService.isItemInList(course.id);
    });

    this.wishlistService.listItems$.subscribe(() => {
      this.lecturesWEB.forEach(course => {
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
