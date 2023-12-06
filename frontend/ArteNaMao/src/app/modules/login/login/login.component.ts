import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public user: User;
  public errologin : boolean = false;
  public loginForm: FormGroup;
  private bsModalRef: BsModalRef;
  public isOpen = false;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private http: HttpClient,
    private router: Router,
  ) { }

  public saveCookie(key: string, values: string) {
    this.cookieService.setCookie(key, values);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  public login(): void {
    this.user = new User();
    this.user.Username = this.loginForm.get('username')?.value;
    this.user.Password = this.loginForm.get('password')?.value;
    this.http
      .post<any>(
        'https://20232-artenamao-production.up.railway.app/api/auth/local/',
        {
          identifier: this.user.Username,
          password: this.user.Password,
        }
      )
      .subscribe(
        (response) => {
          this.saveCookie('jwt', response.jwt);
          this.router.navigate(['/main/produtos']);
        },
        (error) => {
          console.log('An error occurred:', error);
          console.log('error');
          this.errologin = true;
        }
      );
  }

}
