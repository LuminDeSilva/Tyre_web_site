import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//changes to route the components
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './components/products/products.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { OnlinesearchComponent } from './components/onlinesearch/onlinesearch.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes=[
  {path:'product',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'onlinesearch',component:OnlinesearchComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'homepage',component:HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductComponent,
    OnlinesearchComponent,
    ContactusComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
//export class AppRoutingModule { }