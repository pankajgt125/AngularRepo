import { Component, ViewChild } from '@angular/core';
import { EmployeeTableComponent } from "./employee-component";
import {Employee } from  "./employee.model";

@Component({
  selector: 'html-layout',
  template: `<form class="formbox" >
             <input  [(ngModel)]="selectedEmployee.EmployeeId" placeholder="EmployeeId" name="EmployeeId"/>
             <input  [(ngModel)]="selectedEmployee.EmployeeName" placeholder="EmployeeName" name="EmployeeName"/> 
             <button type="button" (click)="saveEmployee()">{{(isRowSelected?'Update':'Add')}}</button>
             <button type="button" *ngIf="isRowSelected" (click)="reset()">Cancel</button>
             </form>
             <empdatatable (onRowSelect)="fillInfo($event)" class='pagebox'></empdatatable>
            `
})
export class FormToolbarComponent {
  @ViewChild(EmployeeTableComponent) grid: EmployeeTableComponent;
  private selectedEmployee: Employee=new Employee(null,null) ;
private isRowSelected:boolean=false;
  fillInfo(employee : Employee){
    this.selectedEmployee = employee;
    this.isRowSelected=true;
  }

  saveEmployee(){
    if(this.isRowSelected)
    {
    this.grid.updateEmployee(this.selectedEmployee);
    }
    else
    {
    this.grid.addEmployee(new Employee(this.selectedEmployee.EmployeeId,this.selectedEmployee.EmployeeName));
    }

  }
  reset(){
    this.selectedEmployee=new Employee(null,null) ;

    this.isRowSelected=false;
  }
}
