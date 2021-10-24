import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { itemImagen } from 'src/models/itemImagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenesInfoService {

  private readonly key: string;
  private readonly url: string;

  constructor(private http: HttpClient) {
  this.key = "23999050-e0839c78b5d4789bc3662427a";
  this.url = "https://pixabay.com/api";
   }

   public getContentImages(): Observable<any> {
     console.log(this.url + '?key=' + this.key + '&lang=es');
    return this.http.get(this.url + '?key=' + this.key + '&lang=es');
  }

  public getFilterContentImages(value: string): Observable<any> {
    console.log(this.url + '?key=' + this.key + '&lang=es&q=' + value);
   return this.http.get(this.url + '?key=' + this.key + '&lang=es&q=' + value);
 }

 public getFilterByCategoryContentImages(value: string): Observable<any> {
  console.log(this.url + '?key=' + this.key + '&lang=es&category=' + value);
 return this.http.get(this.url + '?key=' + this.key + '&lang=es&category=' + value);
}
}
