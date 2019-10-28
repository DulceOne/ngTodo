import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './core/pages/not-found/not-found.component'
import { cardReducer } from "./redux/card.reduser";

// import { PrimeThemeModule } from 'core/prime-theme/prime-theme.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({cardPage: cardReducer})
    // PrimeThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
