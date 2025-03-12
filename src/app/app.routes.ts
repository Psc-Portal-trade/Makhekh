import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondHomeComponent } from './second-home/second-home.component';
import { AboutUsInstructorComponent } from './about/about-us-instructor/about-us-instructor.component';
import { DevelopmetCourseComponent } from './second-home/courses/developmet-course/developmet-course.component';
import { FinanceCourseComponent } from './second-home/courses/finance-course/finance-course.component';
import { ItCourseComponent } from './second-home/courses/it-course/it-course.component';
import { DesignCourseComponent } from './second-home/courses/design-course/design-course.component';
import { BusinessCourseComponent } from './second-home/courses/business-course/business-course.component';
import { MarketingCourseComponent } from './second-home/courses/marketing-course/marketing-course.component';
import { HealthCourseComponent } from './second-home/courses/health-course/health-course.component';
import { OfferCourseComponent } from './second-home/courses/offer-course/offer-course.component';
import { ShippingCartComponent } from './shipping-cart/shipping-cart.component';
import { CartComponent } from './cart/cart.component';
import { WishlistStartComponent } from './wishlist-start/wishlist-start.component';
import { WishlistEndComponent } from './wishlist-end/wishlist-end.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { InstructorSignupComponent } from './instructor-signup/instructor-signup.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TestComponent } from './test/test.component';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { QaComponent } from './qa/qa.component';
import { MessagesComponent } from './messages/messages.component';
import { StudentSuggestionsComponent } from './student-suggestions/student-suggestions.component';
import { OverviewComponent } from './overview/overview.component';
import { StudentsComponent } from './students/students.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

export const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"studentHome",component:SecondHomeComponent},
  {path:"aboutInstructor",component:AboutUsInstructorComponent},
  {path:"shippingCart",component:ShippingCartComponent},
  {path:"cart",component:CartComponent},
  {path:"wishlist",component:WishlistStartComponent},
  {path:"wishedList",component:WishlistEndComponent},
  {path:"instructor-profile",component:InstructorProfileComponent},
  {path:"student-profile",component:StudentProfileComponent},
  {path:"createCoursesDetalis",component:CourseHeaderComponent},
  {path:"my-courses",component:MyCoursesComponent},






// ----------------  courses -------------------

{path:"development-course",component:DevelopmetCourseComponent},
{path:"finance-course",component:FinanceCourseComponent},
{path:"it-course",component:ItCourseComponent},
{path:"design-course",component:DesignCourseComponent},
{path:"business-course",component:BusinessCourseComponent},
{path:"marketing-course",component:MarketingCourseComponent},
{path:"health-course",component:HealthCourseComponent},
{path:"offer-course",component:OfferCourseComponent},



// ----------------  end courses -------------------



//  *********** HOME ***********
  {path:"home/about",redirectTo:"about",pathMatch:"full"},
  {path:"home/register",redirectTo:"register",pathMatch:"full"},
  {path:"home/login",redirectTo:"login",pathMatch:"full"},
  {path:"home/home",redirectTo:"home",pathMatch:"full"},
  {path:"home/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"home/wishlist",redirectTo:"wishlist",pathMatch:"full"},



//  *********** ABOUT ***********

  {path:"about/home",redirectTo:"home",pathMatch:"full"},
  {path:"about/register",redirectTo:"register",pathMatch:"full"},
  {path:"about/login",redirectTo:"login",pathMatch:"full"},
  {path:"about/about",redirectTo:"about",pathMatch:"full"},
  {path:"about/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"about/wishlist",redirectTo:"wishlist",pathMatch:"full"},
  {path:"about/sign-up",component:InstructorSignupComponent},



//  *********** REGISTER ***********
  {path:"register/home",redirectTo:"home",pathMatch:"full"},
  {path:"register/about",redirectTo:"about",pathMatch:"full"},
  {path:"register/login",redirectTo:"login",pathMatch:"full"},
  {path:"register/register",redirectTo:"register",pathMatch:"full"},
  {path:"register/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"register/wishlist",redirectTo:"wishlist",pathMatch:"full"},


//  *********** LOGIN ***********
  {path:"login/register",redirectTo:"register",pathMatch:"full"},
  {path:"login/home",redirectTo:"home",pathMatch:"full"},
  {path:"login/about",redirectTo:"about",pathMatch:"full"},
  {path:"login/login",redirectTo:"login",pathMatch:"full"},
  {path:"login/studentHome",redirectTo:"studentHome",pathMatch:"full"},
  {path:"login/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"login/wishlist",redirectTo:"wishlist",pathMatch:"full"},


//  *********** CART ***********
{path:"shippingCart/register",redirectTo:"register",pathMatch:"full"},
{path:"shippingCart/home",redirectTo:"home",pathMatch:"full"},
{path:"shippingCart/about",redirectTo:"about",pathMatch:"full"},
{path:"shippingCart/login",redirectTo:"login",pathMatch:"full"},
{path:"shippingCart/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"shippingCart/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
{path:"shippingCart/wishlist",redirectTo:"wishlist",pathMatch:"full"},


//  *********** wishlist ***********
{path:"wishlist/register",redirectTo:"register",pathMatch:"full"},
{path:"wishlist/home",redirectTo:"home",pathMatch:"full"},
{path:"wishlist/about",redirectTo:"about",pathMatch:"full"},
{path:"wishlist/login",redirectTo:"login",pathMatch:"full"},
{path:"wishlist/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"wishlist/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
{path:"wishlist/wishlist",redirectTo:"wishlist",pathMatch:"full"},



//  *********** Student Home ***********
{path:"studentHome/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"studentHome/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"studentHome/cart",redirectTo:"cart",pathMatch:"full"},
{path:"studentHome/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"studentHome/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"studentHome/logOut",redirectTo:"home",pathMatch:"full"},
{path:"studentHome/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"studentHome/my-courses",redirectTo:"my-courses",pathMatch:"full"},



{path:"studentHome/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"studentHome/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"studentHome/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"studentHome/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"studentHome/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"studentHome/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"studentHome/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"studentHome/offer-course",redirectTo:"offer-course",pathMatch:"full"},



//  *********** instructor about ***********

{path:"aboutInstructor/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"aboutInstructor/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"aboutInstructor/cart",redirectTo:"cart",pathMatch:"full"},
{path:"aboutInstructor/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"aboutInstructor/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"aboutInstructor/logOut",redirectTo:"home",pathMatch:"full"},
{path:"aboutInstructor/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"aboutInstructor/my-courses",redirectTo:"my-courses",pathMatch:"full"},






//  *********** Cart Signed ***********

{path:"cart/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"cart/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"cart/cart",redirectTo:"cart",pathMatch:"full"},
{path:"cart/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"cart/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"cart/logOut",redirectTo:"home",pathMatch:"full"},
{path:"cart/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"cart/my-courses",redirectTo:"my-courses",pathMatch:"full"},




//  *********** wished Signed ***********

{path:"wishedList/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"wishedList/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"wishedList/cart",redirectTo:"cart",pathMatch:"full"},
{path:"wishedList/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"wishedList/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"wishedList/logOut",redirectTo:"home",pathMatch:"full"},
{path:"wishedList/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"wishedList/my-courses",redirectTo:"my-courses",pathMatch:"full"},

//  *********** my-courses ***********

{path:"my-courses/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"my-courses/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"my-courses/cart",redirectTo:"cart",pathMatch:"full"},
{path:"my-courses/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"my-courses/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"my-courses/logOut",redirectTo:"home",pathMatch:"full"},
{path:"my-courses/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"my-courses/my-courses",redirectTo:"my-courses",pathMatch:"full"},




//  *********** student profile ***********




{path:"student-profile/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"student-profile/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"student-profile/cart",redirectTo:"cart",pathMatch:"full"},
{path:"student-profile/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"student-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"student-profile/logOut",redirectTo:"home",pathMatch:"full"},
{path:"student-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"student-profile/my-courses",redirectTo:"my-courses",pathMatch:"full"},










//  *********** instructor profile ***********

{path:"instructor-profile/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"instructor-profile/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"instructor-profile/cart",redirectTo:"cart",pathMatch:"full"},
{path:"instructor-profile/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"instructor-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"instructor-profile/logOut",redirectTo:"home",pathMatch:"full"},
{path:"instructor-profile/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/create-course",component:CreateCourseComponent},
{path:"instructor-profile/create-course/course/exit",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/create-course/course",component:TestComponent},
{path:"instructor-profile/create-course/course/createCoursesDetalis",redirectTo:"createCoursesDetalis",pathMatch:"full"},
{path:"createCoursesDetalis/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"instructor-profile/my-courses",redirectTo:"my-courses",pathMatch:"full"},






{path:"instructor-profile/qa",component:QaComponent},
{path:"instructor-profile/messages",component:MessagesComponent},
{path:"instructor-profile/student-suggestions",component:StudentSuggestionsComponent},

{path:"instructor-profile/overview",component:OverviewComponent},
{path:"instructor-profile/students",component:StudentsComponent},
{path:"instructor-profile/reviews",component:ReviewsComponent},






//  *********** create-course***********



{path:"instructor-profile/create-course/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/create-course/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/create-course/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/create-course/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/create-course/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/create-course/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/create-course/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/create-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/create-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/create-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},








//  *********** QA ***********


{path:"instructor-profile/qa/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/qa/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/qa/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/qa/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/qa/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/qa/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/qa/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/qa/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/qa/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/qa/studentHome",redirectTo:"studentHome",pathMatch:"full"},


//  *********** messages ***********


{path:"instructor-profile/messages/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/messages/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/messages/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/messages/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/messages/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/messages/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/messages/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/messages/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/messages/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/messages/studentHome",redirectTo:"studentHome",pathMatch:"full"},


//  *********** student-suggestions ***********



{path:"instructor-profile/student-suggestions/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/student-profile",redirectTo:"instructor-profile/student-profile",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/student-suggestions/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/student-suggestion/studentHome",redirectTo:"studentHome",pathMatch:"full"},



//  *********** overview ***********




{path:"instructor-profile/overview/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/overview/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/overview/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/overview/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/overview/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/overview/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/overview/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/overview/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/overview/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/overview/studentHome",redirectTo:"studentHome",pathMatch:"full"},



//  *********** students ***********




{path:"instructor-profile/students/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/students/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/students/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/students/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/students/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/students/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/students/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/students/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/students/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/students/studentHome",redirectTo:"studentHome",pathMatch:"full"},




//  *********** reviews ***********


{path:"instructor-profile/reviews/student-suggestions",redirectTo:"instructor-profile/student-suggestions",pathMatch:"full"},
{path:"instructor-profile/reviews/messages",redirectTo:"instructor-profile/messages",pathMatch:"full"},
{path:"instructor-profile/reviews/qa",redirectTo:"instructor-profile/qa",pathMatch:"full"},
{path:"instructor-profile/reviews/overview",redirectTo:"instructor-profile/overview",pathMatch:"full"},
{path:"instructor-profile/reviews/students",redirectTo:"instructor-profile/students",pathMatch:"full"},
{path:"instructor-profile/reviews/reviews",redirectTo:"instructor-profile/reviews",pathMatch:"full"},
{path:"instructor-profile/reviews/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/reviews/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/reviews/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/reviews/studentHome",redirectTo:"studentHome",pathMatch:"full"},

















// ---------------- courses routes ------------
//  development-course

{path:"development-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"development-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"development-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"development-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"development-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"development-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"development-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"development-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},







{path:"development-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"development-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"development-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"development-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"development-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"development-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"development-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"development-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},

//  finance-course

{path:"finance-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"finance-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"finance-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"finance-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"finance-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"finance-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"finance-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"finance-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},




{path:"finance-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"finance-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"finance-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"finance-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"finance-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"finance-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"finance-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"finance-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},


//  it-course

{path:"it-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"it-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"it-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"it-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"it-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"it-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"it-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"it-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},




{path:"it-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"it-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"it-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"it-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"it-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"it-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"it-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"it-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},


//  design-course

{path:"design-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"design-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"design-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"design-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"design-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"design-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"design-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"design-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},




{path:"design-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"design-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"design-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"design-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"design-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"design-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"design-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"design-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},

//  business-course

{path:"business-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"business-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"business-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"business-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"business-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"business-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"business-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"business-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},




{path:"business-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"business-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"business-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"business-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"business-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"business-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"business-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"business-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},

//  marketing-course

{path:"marketing-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"marketing-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"marketing-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"marketing-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"marketing-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"marketing-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"marketing-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"marketing-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},





{path:"marketing-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"marketing-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"marketing-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"marketing-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"marketing-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"marketing-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"marketing-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"marketing-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},

//  health-course

{path:"health-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"health-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"health-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"health-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"health-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"health-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"health-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"health-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},



{path:"health-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"health-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"health-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"health-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"health-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"health-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"health-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"health-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},


//  offer-course

{path:"offer-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"offer-course/aboutInstructor",redirectTo:"aboutInstructor",pathMatch:"full"},
{path:"offer-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"offer-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"offer-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"offer-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"offer-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"offer-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},




{path:"offer-course/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"offer-course/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"offer-course/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"offer-course/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"offer-course/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"offer-course/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"offer-course/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"offer-course/offer-course",redirectTo:"offer-course",pathMatch:"full"},













  {path:"**",component:NotFoundComponent},

];
