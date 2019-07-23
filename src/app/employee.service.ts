import {Injectable} from "@angular/core";
import { Response,Headers  } from '@angular/http';
import { HttpClient  } from '@angular/common/http';
import 'rxjs/Rx';
import {Employee } from  "./components/employee.model";
import { Observable } from 'rxjs/Observable';
@Injectable()
export class EmployeeService
{

    constructor(private http:HttpClient)
    {

    }
    data:Employee[];
//  public  SaveBooks(bookData:any)
//  {
//     const body=JSON.stringify(bookData);
//     const headers=new Headers();
//     headers.append('content-type','application/json');
//     return this.http.post('https://taskmanager-25b59.firebaseio.com/mf.json',body,{headers:headers})
//     .map((data:Response)=>data.json());


//  }

 public  getEmployeeData():Observable<any> 
 {
    //  this.http.get('https://taskmanager-25b59.firebaseio.com/mf.json')
    // .map((data:Response)=>data.json());
    
       return  this.http.get('http://localhost:50282/api/Employee')
       .map(response => response);
        
    // return this.data;
 }
}
