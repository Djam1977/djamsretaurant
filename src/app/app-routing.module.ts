import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/concept/concept.component';

import { MenuComponent } from './pages/menu/menu.component';

import { GoldenBookComponent } from './pages/golden-book/golden-book.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminConnectComponent } from './pages/admin-page/admin-connect/admin-connect.component';
import { AdminGuard } from './guards/admin.guard';
import { DishComponent } from './pages/dish/dish.component';
import { AdminDeleteDishComponent } from './pages/admin-delete-dish/admin-delete-dish.component';
import { AdminAddDishComponent } from './pages/admin-add-dish/admin-add-dish.component';
import { VisitorGuard } from './guards/visitor.guard';
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
    component: DishComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin-connexion',
    component: AdminConnectComponent,
    canActivate: [VisitorGuard],
  },
  {
    path:'admin-delete-dish',
    component: AdminDeleteDishComponent,
    canActivate: [AdminGuard],
  },
  {
    path:'admin-add-dish',
    component: AdminAddDishComponent,
    canActivate: [AdminGuard],
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
