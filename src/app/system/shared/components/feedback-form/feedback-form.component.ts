import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {
  profileForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    title: [''],
    comment: [''],
  });

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder) {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
