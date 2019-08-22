import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service'
import { Giphys } from '../giphys';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
gifs:Giphys []
  constructor( public httpService:HttpServiceService) { }

  ngOnInit() {
  }
  searchGif(searchIt){
    this.httpService.searchGif(searchIt).then(
      (results)=>{
        this.gifs = this.httpService.gifs;
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }
  
  

}
