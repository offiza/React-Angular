import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainItemComponent} from './main-items/main-items.component';
import {AboutComponent} from './about/about.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Articles', component: MainItemComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Article/:id', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
