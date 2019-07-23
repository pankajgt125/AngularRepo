import { Component, Input, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee } from  "./employee.model";
@Component({
  selector: 'empchart',
  template:"<div></div>",
  providers: [EmployeeService]
})
export class EmployeeChartComponent implements OnDestroy, OnInit {
    private ui : webix.ui.datatable;
    data:Employee[];
    constructor(private employeeService: EmployeeService,private root: ElementRef) {
        this.employeeService.getEmployeeData().toPromise().then(obj=>{

            this.data=obj as Employee[];
            var chartdata=[
                {type:"Total employee",count:100},
                {type:"deleted employee",count:10},
                {type:"Joined employee",count:12}
            ];
    <webix.ui.chart> webix.ui({
      view:"chart",
      type:"bar",
      width:600,
      height:250,
      value:"#count#",
      gradient:"falling",
      color:"#b9a8f9",
      radius:0,
      alpha:0.5,
      border:true,
      barWidth:70,
      xAxis:{
        template:"#type#"
      },
      yAxis:{
        start:0,
        end:100,
        step:10,
        template:function(obj){
          return (obj%20?"":obj)
        }
      },
      datatype:"json",
      data: chartdata
    });
  })
}
ngOnInit(){
 
    this.ui.resize();
  }
  ngOnDestroy(){
    this.ui.destructor();
  }
    
}