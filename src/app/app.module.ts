import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headerAndFooter/header/header.component';
import { FooterComponent } from './headerAndFooter/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ConceptComponent } from './pages/concept/concept.component';

import { FlatComponent } from './pages/flat/flat.component';
import { GoldenBookComponent } from './pages/golden-book/golden-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ConceptComponent,
    FlatComponent,
    GoldenBookComponent,
    
   
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
