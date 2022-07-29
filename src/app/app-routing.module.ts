import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  
  {path: '' , component: DashboardComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'posts' , component: PostComponent},
  {path: 'comments' , component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
