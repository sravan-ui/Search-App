import { Component, OnInit } from '@angular/core';
import {  Response  } from '@angular/http';
import { HttpService } from '../http.service';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  providers: [HttpService],

})
export class UserComponent {

  items: any[] = [];

  constructor(private httpService: HttpService){}

  //Calling the Api's.
  onSubmit() {
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data)
      );
  }

  //Transforming the Api Data.
  onGetData(){
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data){
            myArray.push(data[key]);
          }
          this.items = myArray.sort();
        }
      );
  }

}
