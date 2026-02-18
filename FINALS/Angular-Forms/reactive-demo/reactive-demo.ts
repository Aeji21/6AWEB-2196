import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css',
})
export class ReactiveDemo {

  form: FormGroup;

  departments = ['IT', 'HR', 'Finance', 'Marketing'];
  skillsList = ['Angular', 'React', 'NodeJS', 'UI/UX'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      department: ['', Validators.required],
      employmentType: ['', Validators.required],
      skills: this.fb.array([], Validators.required),
      bio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  onSkillChange(event: any) {
    if (event.target.checked) {
      this.skills.push(this.fb.control(event.target.value));
    } else {
      const index = this.skills.controls.findIndex(
        x => x.value === event.target.value
      );
      this.skills.removeAt(index);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
    alert('Profile Submitted Successfully!');
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return !!(control && control.touched && control.invalid);
  }
}
