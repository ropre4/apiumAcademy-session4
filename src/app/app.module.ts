import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './store/reducers';
import {effects} from './store/effects';
import {GameSelectorService} from './services/selectors/game.selector-service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TitleComponent } from './components/title/title.component';
import { ZoneDemoComponent } from './components/zone-demo/zone-demo.component';
import { TestComponent } from './components/test/test.component';
import { CollapseDirective } from './directives/collapse.directive';
import { CollapseBoxComponent } from './directives/collapse-box/collapse-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    NavbarComponent,
    UserFormComponent,
    TitleComponent,
    ZoneDemoComponent,
    TestComponent,
    CollapseDirective,
    CollapseBoxComponent
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
