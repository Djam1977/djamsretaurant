import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/menu';
import { menusMenu } from 'src/app/shared/data/fake-data-menu';
import { Gender } from 'src/app/shared/interfaces/gender';
import { Genders } from 'src/app/shared/data/data-gender';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menusToDisplay: Menu[] = menusMenu;
  genreToDisplay: Gender[] = Genders;
}