import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormToolbarComponent }   from './components/form-toolbar.component';
import { EmployeeChartComponent } from './components/employeechart-component';


const routes: Routes = [

  { path: 'form-grid', component: FormToolbarComponent },
  { path: 'form-chart', component: EmployeeChartComponent },
  { path: '', component: FormToolbarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
