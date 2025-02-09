import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"register",component:RegisterComponent},
  {path:"register/login",redirectTo:"login",pathMatch:"full"},

  {path:"login",component:LoginComponent},
  {path:"login/register",redirectTo:"register",pathMatch:"full"},


  {path:"**",component:NotFoundComponent},

];
