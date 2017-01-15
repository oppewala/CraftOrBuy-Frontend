import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ItemsModule } from './items/items.module'
import { HeaderComponent } from './common/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    ItemsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, // Last for wildcard routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
