import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'email', component: EmailComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: SingleBlogComponent},
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],

exports: [RouterModule]
})
export class AppRoutingModule { }
