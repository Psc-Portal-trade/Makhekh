import { Component, OnInit } from '@angular/core';
import { SecondNavComponent } from '../navbar/second-nav/second-nav.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { CourseInformationService } from '../services/course-information.service';

@Component({
  selector: 'app-course-information',
  imports: [SecondNavComponent,CommonModule,RouterLink],
  templateUrl: './course-information.component.html',
  styleUrl: './course-information.component.css'
})
export class CourseInformationComponent implements OnInit{
  selectedMonth = '';
  courseObj: any = {};



  get uniqueMonths(): string[] {
    return [...new Set(this.course2.schedules.map(course => course.date))];
  }

  onMonthChange(event: Event) {
    this.selectedMonth = (event.target as HTMLSelectElement).value;
  }

  get filteredCourses() {
    return this.selectedMonth ? this.course2.schedules.filter(course => course.date === this.selectedMonth) : this.course;
  }


  course1 = {
    "courseType": "Recorded Educational Courses",
    "category": "Development",
    "learningObjectives": "qqqqqqqqqq",
    "requirements": "qqqqqqqqqqqqqqqqqq",
    "targetAudience": "qqqqqqqqqqqqqqqqqqqqq",
    "courseTitle": "database",
    "curriculum": [
        {
            "name": "w",
            "lectures": [
                {
                    "title": "w",
                    "video": {},
                    "videoName": "[EgyBest].Aashiqui.2.2013.720p.x264.mp4",
                    "description": "w",
                    "activeTab": "video",
                    "duration":"10 min"
                },
                {
                    "title": "www",
                    "video": {},
                    "videoName": "[EgyBest].Ashtata.Ashtwt.2004.BluRay.720p.x264.mp4",
                    "description": "www",
                    "activeTab": "video",
                    "duration":"14 min"
                },
                {
                    "title": "www",
                    "video": {},
                    "videoName": "[EgyBest].Al.Ghasala.2020.WEB-DL.720p.x264.mp4",
                    "description": "qq",
                    "activeTab": "video",
                    "duration":"17 min"
                }
            ]
        },
        {
            "name": "www",
            "lectures": [
                {
                    "title": "www",
                    "video": {},
                    "videoName": "[EgyBest].Ashtata.Ashtwt.2004.BluRay.720p.x264.mp4",
                    "description": "ww",
                    "activeTab": "video",
                    "duration":"14 min"
                },
                {
                    "title": "www",
                    "video": {},
                    "videoName": "[EgyBest].Bang.Bang.2014.BluRay.480p.x264.mp4",
                    "description": "wqw",
                    "activeTab": "description",
                    "duration":"10 min"
                },
                {
                    "title": "www",
                    "video": {},
                    "videoName": "[EgyBest].Bang.Bang.2014.BluRay.480p.x264.mp4",
                    "description": "qweq",
                    "activeTab": "description",
                    "duration":"14 min"
                }
            ]
        }
    ],
    "landingPage": {
        "title": "qww",
        "description": "qq",
        "language": "English",
        "level": "Advanced",
        "category": "Development",
        "duration": "Week",
        "video": {},
        "photo": {},
        "lecturer": "ww",
        "lecturerDescription": "ww"
    },
    "pricing": {
        "currency": "USD",
        price: 5000,
        "priceTier": "Free",
        "promoLink": "",
        "selectedVoucher": "best_current_price",
        "voucherOptions": [
            {
                "value": "best_current_price",
                "label": "Best current price",
                "features": [
                    "Fixed price",
                    "Unlimited quantity",
                    "Limited validity period"
                ]
            },
            {
                "value": "custom_price",
                "label": "Custom price",
                "features": [
                    "Select a price between two numbers",
                    "Unlimited quantity",
                    "Limited validity period"
                ]
            }
        ]
    },
    "coupons": [
        {
            "code": "",
            "status": "Free",
            "users": "Limited",
            "startDate": "",
            "endDate": ""
        }
    ],
    isInWishlist: false,
    isInCart: false,
    id: 1,
    rate: 4.7,
    ratingsCount: 9,
    instructor: 'Ahmed Abbas',
    instructorImage: "assets/image.jpg",
    lastUpdate: '11/2025',
    language: 'English',
    seatsLeft: 10,
    watched: 107,
    src: 'assets/course-2.png',
}

course2={
  "courseType": "Live Streamed Educational Courses",
  "category": "Finance & Accounting",
  "learningObjectives": "z",
  "requirements": "z",
  "targetAudience": "z",
  "courseTitle": "z",
  "schedules": [
      {
          "id":"1",
          "courseTitle": "z",
          "date": "2025-03-11",
          "time": "13:38",
          "lecturerName": "z",
          "registered": 10,
          "status": "zz",
          "joinLink": "zzz",
          "limit": 8
      },
      {
        "id":"2",
          "courseTitle": "xxcx",
          "date": "2025-03-21",
          "time": "15:36",
          "lecturerName": "h",
          "registered": 2,
          "status": "hh",
          "joinLink": "jbljk",
          "limit": 9
      }
  ],
  "landingPage": {
      "title": "sad",
      "description": "ssdd",
      "language": "Arabic",
      "level": "Intermediate",
      "category": "Design",
      "duration": "Month",
      "lecturer": "a",
      "lecturerDescription": "a",
      "photo": {},
      "video": {}
  },
  "pricing": {
      "currency": "USD",
      price: 4000,
      "priceTier": "Free",
      "promoLink": "",
      "selectedVoucher": "best_current_price"
  },
  "coupons": [
      {
          "code": "a",
          "status": "Free",
          "users": "Limited",
          "startDate": "",
          "endDate": ""
      }
  ],
  isInWishlist: false,
  isInCart: false,
  id: 1,
  rate: 4.7,
  ratingsCount: 9,
  instructor: 'Ahmed Abbas',
  instructorImage: "assets/image.jpg",
  lastUpdate: '11/2025',
  language: 'English',
  seatsLeft: 10,
  watched: 107,
  src: 'assets/course-2.png',
}



  instructor = {
    Rating:4.7,
    Courses:2,
    Students:107,
    Reviews:9
  };


  course = {}


  constructor(private cartService: CartService, private wishlistService: WishlistService,private route: ActivatedRoute,private courseService: CourseInformationService) {}

  ngOnInit() {

  // جلب بيانات الكورس من الخدمة
  this.courseObj = this.courseService.getCourse();

  if (!this.courseObj) {
    console.log("لا يوجد بيانات متاحة للكورس.");
    return; // إنهاء التنفيذ إذا لم تكن هناك بيانات
  } else {
    console.log("تم جلب بيانات الكورس:", this.courseObj);
  }

console.log(this.courseObj.courseType)

if (this.courseObj.courseType === "Live Streamed Educational Courses") {
  this.course2 = {
    ...this.courseObj
  };
  this.course1 = { ...this.course1, courseType: "" };
} else {
  this.course1 = {
    ...this.courseObj
  };
  this.course2 = { ...this.course2, courseType: "" };
}

console.log("course 1  ",this.course1)
console.log("course 2  ", this.course2)





  }


  addToCart1() {
    this.cartService.addToCart(this.course1);
    this.course1.isInCart = true;
  }

  removeFromCart1() {
    this.cartService.removeFromCart(this.course1.id);
    this.course1.isInCart = false;
  }

  addToWishlist1() {
    this.wishlistService.addToList(this.course1);
    this.course1.isInWishlist = true;
  }

  removeFromWishlist1() {
    this.wishlistService.removeFromList(this.course1.id);
    this.course1.isInWishlist = false;
  }













  addToCart2() {
    this.cartService.addToCart(this.course2);
    this.course2.isInCart = true;
  }

  removeFromCart2() {
    this.cartService.removeFromCart(this.course2.id);
    this.course2.isInCart = false;
  }

  addToWishlist2() {
    this.wishlistService.addToList(this.course2);
    this.course2.isInWishlist = true;
  }

  removeFromWishlist2() {
    this.wishlistService.removeFromList(this.course2.id);
    this.course2.isInWishlist = false;
  }

















  totalLectures(): number {
    return this.course1.curriculum.reduce((sum, section) => sum + section.lectures.length, 0);
  }
  isArabic = false; // يمكن تغييره بناءً على اللغة المطلوبة
}
