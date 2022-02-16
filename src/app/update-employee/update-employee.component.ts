import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { dataBound } from "@syncfusion/ej2-angular-grids";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  Gender=[ {name:'Male'},{name:'Female'},{name:'Others'}];
  selected:string='';

  IDProofType=[{name:'Voter ID'},{name:'PassPort' },{name:'Driving License'}]; 
  proof:string='';

  BloodGroup=[{name:'A+'},{name:'A-'},{name:'B+'},{name:'B-'},{name:'O+'},{name:'O-'},{name:'AB+'},{name:'AB-'} ]; 
  blood:string='';

  EmpID: string='';
  EmpName: string='';
  DOB:string='';
  IDProofNumber: string='';
  emailID: string='';
  Phone: string='';
  EmpAddress: string='';
  employee: any = [];
 
  constructor(
    private service:SharedService,
    private activatedRoute: ActivatedRoute,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

    OnSubmit(val: any)
    {    
        console.log(val);
        this.service.updateEmployee(val).subscribe(result=>{alert(result.toString())});
   }

    ngOnInit(){
      this.activatedRoute.queryParams.subscribe(params => {
        this.EmpID = params['prop']
      });
      this.service.getDep(this.EmpID.toString()).subscribe((data:{})=>{
        this.employee=data;
        console.log(this.employee);
      })  
      
    }

}
