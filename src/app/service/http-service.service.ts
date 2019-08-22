import { Injectable } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../../environments/environment';

import {Giphys} from '../giphys'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  gifs:Giphys[]=[];

  constructor(private http:HttpClient) { }
  searchGif(searchIt:string){
    interface Results{
      data:[];
    }
    let searchEndpoint = "https://api.giphy.com/v1/gifs/search?api_key="+environment.apiKey;
    let promise = new Promise((resolve, reject)=>{
      this.http.get<Results>(searchEndpoint+"&q="+searchIt).toPromise().then(
        (results)=>{
          this.gifs=[];
          for(let i=0; i<results.data.length;i++){
            this.gifs.push(new Giphys(results.data[i]["images"]["fixed_height"]["url"]));
          }
          console.log(this.gifs);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    })
    return promise;
  }
}

