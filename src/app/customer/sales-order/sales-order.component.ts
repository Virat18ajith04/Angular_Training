import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/servics/apiservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  constructor(private service: ApiserviceService, private router: Router) { }
  addPerson = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    quantity: new FormControl('', Validators.required),
  });
  message: boolean = false;
  ngOnInit(): void {
  }
  SaveData(form: FormGroup) {

    if (form.valid) {
      console.log('Logged in');
      //console.log( this.addPerson.value );
      this.service.savePersonData(this.addPerson.value).subscribe((result) => {
        //console.log( result );
        this.message = true;
        this.addPerson.reset({});
        alert("Person added Succesfully");
        this.router.navigate(['/_customer/invoice']);

      });

    } else {
      alert("Please Fill the Below Details !!")
      console.log('There is a problem with the form');
    }

  }
  removeMessage() {
    this.message = false;
  }


}