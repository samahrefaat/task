import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isSubmitted = false;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private homeSer: HomeService,
    private router:Router

    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),

      familyName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      country: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),

      age: new FormControl(null, [Validators.required, Validators.max(40), Validators.min(20)]),
      isHired: new FormControl(false, [Validators.required]),
    });
  } 
  onSubmit(ngForm)
     {
    this.isSubmitted = true;
    if (this.form.invalid) return;
   this.homeSer.save(
    this.form.value.id,
    this.form.value.name,
    this.form.value.familyName,
    this.form.value.address,
     this.form.value.country,
     this.form.value.email,
    this.form.value.age,
   this.form.value.isHired
   )
   this.router.navigate([''])
  }
  onCancle() {
    this.location.back();
  }

}
