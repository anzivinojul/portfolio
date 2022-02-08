import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  firstname: FormControl = new FormControl("", [Validators.required]);
  lastname: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  subject: FormControl = new FormControl("", [Validators.required]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(1024)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      subject: this.subject,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  onSubmit() {
    if(this.contactForm.status == "VALID" && this.honeypot.value == "") {
      this.contactForm.disable();
      var formData: any = new FormData();
      formData.append("firstname", this.contactForm.get("firstname").value);
      formData.append("lastname", this.contactForm.get("lastname").value);
      formData.append("email", this.contactForm.get("email").value);
      formData.append("subject", this.contactForm.get("subject").value);
      formData.append("message", this.contactForm.get("message").value);
      this.isLoading = true;
      this.submitted = false;

      this.http.post("https://script.google.com/macros/s/AKfycbx3DfS_3HxbsU2twcJ9lmz8timO1G9A1_TkGYmkJ4at4HC0w9-lcAzvPrmYPCd26SPg/exec", formData).subscribe(
        (response) => {
          if(response["result"] == "success") {
            this.responseMessage = "Merci pour votre message ! Je vous recontacte au plus vite !";
          }
          else {
            this.responseMessage = "Oops! Quelque chose s'est mal passé, réessayez plus tard.";
          }
          this.contactForm.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! Quelque chose s'est mal passé, réessayez plus tard.";
          this.contactForm.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
