import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/servics/apiservice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
comments : any;
postcom :any;
peoples : any;
  constructor(private router:Router,private service:ApiserviceService) { }

  ngOnInit(): void {

      /*this.service.getStates().subscribe(
        res=> {
            this.comments=res        }
      )*/
      this.service.getStates1().subscribe(
        res=> {
            this.peoples=res        }
      ) 
     
      
  }
  deletePerson( person_id: any ) {
    console.log("Deleted ID :",person_id );
    this.service.deletePerson(person_id).subscribe(
      (result)=>{
        console.log(result);
        alert("Person Deleted Succesfull");
        this.ngOnInit();
      }
    )
  }

}
