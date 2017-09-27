import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bonsai } from './bonsai';

@Injectable()
export class BonsaiService {

  constructor(private http: Http) { }

  getBonsais(): Promise<Bonsai[]> {
    return this.http.get('http://localhost:3000/bonsais')
      .toPromise()
      .then(res => res.json() as Bonsai[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
