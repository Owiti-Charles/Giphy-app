import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GifComponent } from './gif/gif.component'


const routes: Routes = [
  {path:"home", component:GifComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
