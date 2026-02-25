import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule,
    MatToolbarModule, MatIconModule, MatNativeDateModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSliderModule,
    MatSlideToggleModule, MatProgressSpinnerModule, MatSelectModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  userName = '';
  submitted = false;
  isLoading = false;

  formdata = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('Philippines'),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    skillLevel: new FormControl(5),
    notifications: new FormControl(true)
  });

  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.submitted = true;
        this.userName = data.userName;
      }, 2000);
    }
  }
}