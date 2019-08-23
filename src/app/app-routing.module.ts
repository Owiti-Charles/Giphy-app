import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifComponent } from './gif/gif.component'
import { StickersComponent } from './stickers/stickers.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"home", component:GifComponent},
  {path:"stickers", component:StickersComponent},
  { path: '', redirectTo:"/home", pathMatch:"full"},
  {path:"**",component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
