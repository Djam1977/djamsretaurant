import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

// variable menuburgervisible = false (non visible),
// au déclenchement au click elle retourne l'inverse du booléen dc true(visible)
export class HeaderComponent {
  menuBurgerVisible: boolean = false;
  changeMenuBurgerVisible(): void {
    this.menuBurgerVisible = !this.menuBurgerVisible;
  }
  constructor(public authService: AuthServiceService) {}
}
