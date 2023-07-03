import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/concept/concept.component';

import { MenuComponent } from './pages/menu/menu.component';
import { FlatComponent } from './pages/flat/flat.component';
import { GoldenBookComponent } from './pages/golden-book/golden-book.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'concept',
    component: ConceptComponent,
  },
  {
    path: 'message',
    component: GoldenBookComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },

  {
    path: 'plat',
    component: FlatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
