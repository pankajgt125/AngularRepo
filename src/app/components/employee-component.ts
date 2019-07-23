import { Component, Input, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee } from  "./employee.model";

@Component({
  selector: 'empdatatable',
  template:"",
  providers: [EmployeeService]
})
export class EmployeeTableComponent implements OnDestroy, OnInit {
  private ui : webix.ui.datatable;
  @Output() onRowSelect = new EventEmitter<Employee>();
    data:Employee[];
  constructor(private employeeService: EmployeeService,private root: ElementRef) {

    this.employeeService.getEmployeeData().toPromise().then(obj=>{
      // var d = webix.html.create("div", { "class" : "webix_richfilter" });
      // var pagerConfig = { 
      //   container:d,
      //   view:"pager",
      //   id:"pagerA",
      //   template:"{common.first()} {common.prev()} {common.pages()} {common.next()} {common.last()}",
      //   size:20, 
      // };
      // var pager = webix.ui(pagerConfig);
      this.data=obj as Employee[];
      this.ui = <webix.ui.datatable> webix.ui({
        container: this.root.nativeElement,
        view:"datatable", autoConfig:true, data:this.data  ,
        autoheight:true,
        select:"cell",
        navigation:true, 
        editable:true,
        checkboxRefresh:true,
        footer: true,
        // pager:{
        //   group:3, size:20, apiOnly:true, id:"pager"
        // },
        on:{
          onAfterSelect: (id) => this.onRowSelect.emit(this.ui.getItem(id))
        }
    });
    })
  
    }
    
    addRow(){
      this.ui.add({ title:"New row" });
    }
    updateEmployee(employee: Employee){
      this.ui.updateItem(employee.id, employee);
    }
    addEmployee(employee: Employee){
      this.ui.add( employee);
    }
    ngOnInit(){
 
      this.ui.resize();
    }
    ngOnDestroy(){
      this.ui.destructor();
    }
}