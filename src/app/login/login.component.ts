import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Our form's data model will be this User object
  public user: User;
  // If there is an error logging in, we'll store it here
  public error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Create a new empty User object for our form data
    this.user = new User();
  }

  onSubmit(): void {
    // When the form is submitted, try to login with the username/password
    this.auth.login(this.user).subscribe(
      // Success case, navigate to the /bridges route
      () => this.router.navigate(['/bridges']),
      // Failure case, show an error message in the form
      err => {
        this.error = err.error.message;
      }
    );
  }
}
