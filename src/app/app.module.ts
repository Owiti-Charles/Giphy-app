import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifComponent } from './gif/gif.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HttpServiceService }from './service/http-service.service';
import { StickerServiceService } from './stickerservice/sticker-service.service';
import { StickersComponent } from './stickers/stickers.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    NavbarComponent,
    SearchComponent,
    StickersComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpServiceService,StickerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
