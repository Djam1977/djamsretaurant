import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css'],
})
export class PageErrorComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
