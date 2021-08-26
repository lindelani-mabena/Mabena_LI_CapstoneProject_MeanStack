import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckOutCartComponent } from './check-out-cart/check-out-cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductMoreInfoComponent } from './product-more-info/product-more-info.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'product-categories', component:ProductCategoriesComponent, canActivate:[AuthenticationGuardService]},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'update-profile', component:UpdateProfileComponent},
  {path:'contact', component:ContactComponent},
  {path:'products', component:ProductsComponent},
  {path:'product-info/:id', component:ProductMoreInfoComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckOutCartComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
