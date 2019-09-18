import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ButtonComponent } from './components/button/button.component';
import { BtnpageComponent } from './components/btnpage/btnpage.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './store/reducers';
import {effects} from './store/effects';
import {GameSelectorService} from './services/selectors/game.selector-service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    TestimonialsComponent,
    ButtonComponent,
    BtnpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // because of NgRx
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({stateKey: 'routerReducer'}),
  ],
  providers: [
    GameSelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
