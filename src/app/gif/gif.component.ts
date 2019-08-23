import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service'
import { Giphys } from '../giphys';
import { error } from 'util';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
gifs:Giphys [];
  constructor( public httpService:HttpServiceService) { }

  ngOnInit() {
    this.searchGif('lion');
  }
  searchGif(searchIt){
    this.httpService.searchaGif(searchIt).then(
      (results)=>{
        this.gifs = this.httpService.gifys;
      },
      (error)=>{
        console.log('error')
      }
     )
    // function success() {
    // this.gifs = this.httpService.gifys;
    // }
    // function fail(){
    //   console.log('error')
    // }
  }
 
  

}
