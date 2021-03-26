import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  
  PUBLIC_KEY = 'b69e6e953f0e21e9cb30077718d76360';
  HASH = '43fc6b7c0fea87ed037a6ab72b99b294';
  URL_API = ` https://gateway.marvel.com/v1/public/characters?orderBy=name&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  
 

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))

  }
}
