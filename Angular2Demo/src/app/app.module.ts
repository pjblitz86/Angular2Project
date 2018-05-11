import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, EmployeeComponent, ProductListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
