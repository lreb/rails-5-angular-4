import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  API_URL: string;
  constructor(public http: HttpClient) {
      console.log('production: ' + environment.production);
      if (environment.production) {
        this.API_URL = 'http://masterapi.facware.com/';
        console.log(this.API_URL);
      }
      // tslint:disable-next-line:one-line
      else {
        this.API_URL = 'http://localhost:3000/';
        console.log(this.API_URL);
      }
   }
  /**
   * @param path HTTP GET path 'todos'
   * @return get api data
   * */
  public get(path) {
      return this.http.get(this.API_URL + path);
  }
  /**
   * @param  path HTTP POST 'todos'
   * @param  body data to post 'any object'
   * @returns post data to api
   */
  public post(path: string, body: any) {
    return this.http.post(this.API_URL + path, body);

  }
  /**
   * @param  path HTTP DELTE 'todos/1'
   * @returns delete data to api
   */
  public delete(path: string) {
    return this.http.delete(this.API_URL + path);

  }
  /**
   * @param  path HTTP UPDATE 'todos'
   * @param  body update to post 'any object'
   * @returns update data to api
   */
  public update(path: string, body: any) {
    return this.http.put(this.API_URL + path, body);
  }
  private extractData(res: Response) {
	  let body = res.json();
	  return body || { };
	}
}
