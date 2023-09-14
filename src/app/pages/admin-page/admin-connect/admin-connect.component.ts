import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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
  signInForm = this.formbuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  onSubmitForm() {
    if (this.signInForm.valid) {
      this.authService.signin(this.signInForm).subscribe((data) => {
        this.authService.setSession(data);
        this.router.navigate(['/admin']);
      });
    }
  }

  ngOnInit() {}
}
