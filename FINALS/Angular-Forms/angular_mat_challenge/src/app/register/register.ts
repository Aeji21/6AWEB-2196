import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Lahat ng Material Imports
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
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatButtonModule, MatCardModule,
    MatToolbarModule, MatIconModule, MatNativeDateModule, MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSliderModule,
    MatSlideToggleModule, MatProgressSpinnerModule, MatSelectModule, MatDividerModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  userName = '';
  submitted = false;
  isLoading = false;
  isDarkMode = false;

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const regex = /^[a-zA-Z][a-zA-Z0-9]{7,}$/;
    return regex.test(value) ? null : { passwordInvalid: true };
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;
    const date = new Date(value);
    return date.getFullYear() <= 2006 ? null : { tooYoung: true };
  }

  formdata = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    country: new FormControl('Philippines'),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, [Validators.required, this.dateValidator]),
    eventTime: new FormControl('', Validators.required), // TIME PICKER CONTROL
    skillLevel: new FormControl(5),
    notifications: new FormControl(true)
  });

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

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