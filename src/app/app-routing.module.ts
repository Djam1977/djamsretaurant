import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/concept/concept.component';

import { MenuComponent } from './pages/menu/menu.component';
import { FlatComponent } from './pages/flat/flat.component';
import { GoldenBookComponent } from './pages/golden-book/golden-book.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminConnectComponent } from './pages/admin-page/admin-connect/admin-connect.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminDeleteFlatComponent } from './pages/admin-delete-flat/admin-delete-flat.component';
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
    path: 'plat/:id',
    component: FlatComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-connexion',
    component: AdminConnectComponent,
    // canActivate: [VisitorGuard],
  },
  {
    path:'admin-delete-flat',
    component: AdminDeleteFlatComponent
  },
  {
    path: 'error404',
    component: PageErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error404',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
