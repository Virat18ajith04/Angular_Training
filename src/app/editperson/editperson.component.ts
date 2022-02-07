import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/servics/apiservice.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css']
})
export class EditpersonComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: ActivatedRoute ,private route: Router) { 

  }
  updatePerson = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    quantity: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {
    console.log( this.router.snapshot.params['id']);
    this.service.getPersonById( this.router.snapshot.params['id'] ).subscribe( ( result: any ) => {
      console.log(result);
      console.log(result['0']['id']);


      this.updatePerson=new FormGroup( {
        id: new FormControl(result['0']['id']),
        name: new FormControl(result['0']['name']),
        phone: new FormControl(result['0']['phone']),
        quantity: new FormControl(result['0']['quantity'])
      } );
    } );
  }
  UpdateData() {
//console.log(this.updatePerson.value)
//alert(this.updatePerson.value)
    this.service.updatePersonData( this.router.snapshot.params['id'], this.updatePerson.value ).subscribe( ( result ) => {
      console.log( result );
      alert("Person Updated Successfully")
      this.route.navigate(['/_customer/invoice']);
    } )
  }
  
}