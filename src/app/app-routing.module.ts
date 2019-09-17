import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BoardComponent} from './components/board/board.component';
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {BtnpageComponent} from './components/btnpage/btnpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game', component: BoardComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'buttons', component: BtnpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
