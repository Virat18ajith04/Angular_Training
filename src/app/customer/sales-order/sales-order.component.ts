import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from 'src/app/servics/apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  constructor( private service: ApiserviceService ) { }
  addPerson=new FormGroup( {
    id: new FormControl( '' ),
    name: new FormControl( '' ),
    phone: new FormControl( '' ),
   quantity: new FormControl( '' ),
  } );
  message: boolean=false;
  ngOnInit(): void {
  }
  SaveData() {
    //console.log( this.addPerson.value );
    this.service.savePersonData( this.addPerson.value ).subscribe( ( result ) => {
      //console.log( result );
      this.message=true;
      this.addPerson.reset( {} );
    } );
  }
  removeMessage() {
    this.message=false;
  }


}