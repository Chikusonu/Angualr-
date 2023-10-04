import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfieldComponent } from './crossfield/crossfield.component';
import { DynamicformarrayComponent } from './dynamicformarray/dynamicformarray.component';
import { BaseLogger, ConsoleLogger, DBLogger, FileLogger } from './service/logger';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReverseStringPipe } from './reversestringpipe';



@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductsComponent, PagenotfoundComponent, ContactComponent, CrossfieldComponent, DynamicformarrayComponent, LoginComponent,ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
BrowserAnimationsModule,
MatSlideToggleModule,

  ],
  providers: [
{ provide:BaseLogger,useClass:ConsoleLogger},
{provide :"1",useClass: FileLogger},
{ provide :"2", useClass :DBLogger}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
