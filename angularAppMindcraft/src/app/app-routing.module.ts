import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfieldComponent } from './crossfield/crossfield.component';
import { DynamicformarrayComponent } from './dynamicformarray/dynamicformarray.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},

 // {path:'customer', component:CustomerComponent},
 {path:'customer',loadChildren:()=>import('./customer/customermodule.module').then(p=>p.CustomerModule),canActivate:[AuthGuard]},
  {path:'product',component:ProductsComponent},
  {path:'contact',component:ContactComponent},
  {path:'crossfield',component:CrossfieldComponent},
  {path:'formarray',component:DynamicformarrayComponent},
  {path:'**',component:PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
