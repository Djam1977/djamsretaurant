import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/concept/concept.component';
import { MessageComponent } from './pages/admin/message/message.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FlatComponent } from './pages/flat/flat.component';
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
    component: MessageComponent,
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
