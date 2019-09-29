import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BoardComponent} from './components/board/board.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game', component: BoardComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
