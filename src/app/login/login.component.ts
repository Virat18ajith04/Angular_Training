import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder , Validators ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

myForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
     
  ) { 
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
    
  }
  onShow() {
    alert('Show button clicked!');
  }
  onSubmit(form : FormGroup){
    console.log('Valid ?: ',form.valid);
    console.log('Email : ',form.value.email);
    console.log('Password : ',form.value.password);
    if (form.valid) {
      console.log('Logged in');
      this.router.navigate(['/admin']);

  } else {
      console.log('There is a problem with the form');
  }
  }

}
