import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  
  {path: '' , component: DashboardComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'posts' , component: PostComponent},
  {path: 'products' , component: ProductComponent},
  // {path: 'comments' , component: CommentsComponent}
  // : is used as parameter so id becomes a value
  {path: 'comments/:postId' , component: CommentsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
