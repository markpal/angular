import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-corka',
  templateUrl: './corka.component.html',
  styleUrls: ['./corka.component.css']
})


export class CorkaComponent {



  myForm: FormGroup;
  resp: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
  }


  submitForm() {
    const formData = this.myForm.value;
    console.log(formData);
    this.http.post('http://localhost:3000/api/form', formData /*, this.httpOptions*/,  { responseType: 'text'} ).subscribe(response => {
      console.log(response);
      // handle the response here
      this.resp = response;
    });

  } 


}
