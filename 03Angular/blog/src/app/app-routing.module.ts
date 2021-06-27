import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainItemComponent} from './main-items/main-items.component'
import {AboutComponent} from './about/about.component'
import { MainItemDetailComponent } from './main-item-detail/main-item-detail.component';

const routes: Routes = [
  { path: 'Articles', component: MainItemComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Article/:id', component: MainItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
