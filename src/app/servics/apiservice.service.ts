import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  url='http://localhost:5000/api/v1/person';
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
  
  getStates1(): Observable<any>
  {
    return this.http.get('http://localhost:5000/api/v1/person/')
  }
  savePersonData( data: any ) {
    console.log( data );
    return this.http.post( this.url, data );
  }
  deletePerson(id:any)
  {
    return this.http.delete( `${this.url}/${id}` );
  }
}
