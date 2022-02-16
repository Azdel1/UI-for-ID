import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from '../shared.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit
{
  Gender=[ {name:'Male'},{name:'Female'},{name:'Others'}];
  selected:string='';

  IDProofType=[{name:'Voter ID'},{name:'PassPort' },{name:'Driving License'}]; 
  proof:string='';

  BloodGroup=[{name:'A+'},{name:'A-'},{name:'B+'},{name:'B-'},{name:'O+'},{name:'O-'},{name:'AB+'},{name:'AB-'} ]; 
  blood:string='';
 
  constructor(private service:SharedService) { }

    OnSubmit(frm: any)
    {    
        console.log(frm);
        this.service.addEmployee(frm).subscribe(result=>{alert(result.toString())});
      }

    ngOnInit(): void{}
  
}