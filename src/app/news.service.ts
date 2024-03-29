import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`);
  }
}
