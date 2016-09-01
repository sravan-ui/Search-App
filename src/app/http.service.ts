import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  //Injecting Http Service
  constructor(private http: Http) {}

  //Getting the data from remote API's
  getData(){
    return this.http.get("https://angular2-817cc.firebaseio.com//data.json")
      .map((response: Response) => response.json());
  }

  //Transforming the remote data.
  getOwnData(){
    return this.http.get("https://angular2-817cc.firebaseio.com//data.json")
      .map((response: Response) => response.json());
  }

}
