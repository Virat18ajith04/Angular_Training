import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor( private http : HttpClient) { }


  getStates(): Observable<any>
  {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
  posts() : Observable<any>
  {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{title: 'foo',
    body: 'bar',
    userId: 1001,})
  }
}
