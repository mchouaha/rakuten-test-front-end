import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(private http: HttpClient) { }

  getSuggestions(country, query): Observable<string[]> {
    return this.http.get<string[]>(`${environment.API + '&filter=' + country + '&q=' + query}`, {responseType: 'json'});
  }
}
