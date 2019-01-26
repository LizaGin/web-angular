import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app//service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    const { login, password } = loginForm.value;
    this.auth.loginUser(login, password).subscribe(response => {
      if (response.ok) {
        localStorage.setItem('jwt', response.headers.get('x-set-authorization'));
        const role = response.body['role'];
        console.log(role);
        this.auth.setRole(role);

        if (role === 'admin') {
          return this.router.navigate(['admin-pannel']);
        }

        return this.router.navigate(['page']);
      }
    }, err => console.log(err));
  }
}
