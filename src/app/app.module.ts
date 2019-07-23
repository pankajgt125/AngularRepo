import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormToolbarComponent }   from './components/form-toolbar.component';

import { EmployeeTableComponent } from './components/employee-component';
import { EmployeeChartComponent } from './components/employeechart-component';
    

@NgModule({
  declarations: [
    AppComponent,
    FormToolbarComponent,
  
    EmployeeTableComponent,
    EmployeeChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
