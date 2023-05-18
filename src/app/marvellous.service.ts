import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http:HttpClient) { }

  getBatchInfo()
  {
    return this.http.get("http://localhost:5100/getBatchDetail");
  }
}
