import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-admin-connect',
  templateUrl: './admin-connect.component.html',
  styleUrls: ['./admin-connect.component.css'],
})
export class AdminConnectComponent {
  constructor(
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private apiService: ApiService
  ) {}
  messageReponse: string = '';
  signInForm = this.formbuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  onSubmitForm() {
    if (this.signInForm.valid) {
      this.authService.signin(this.signInForm).subscribe(
        (data) => {
          this.authService.setSession(data);
          this.router.navigate(['/admin']);
        },
        (error) => {
          if (error.status === 401) {
            this.messageReponse =
              'Votre Identifiant et ou votre mot de passe est invalide';
          }
        }
      );
    }
  }

  ngOnInit() {}
}
