import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isFormSubmitted = false;

  submitForm() {
    // You can add your own logic here to submit the form data
    // For this example, we'll simply log the form data and reset the form
    console.log(this.formData);
    this.resetForm();
    this.isFormSubmitted = true;
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
