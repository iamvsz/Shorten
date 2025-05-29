import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface shortenRequest {
  long_url: string;
  domain?: string;
}

interface shortenResponse {
  link: string;
  long_url: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class BitlyService {
  private apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) { }
  shortenUrl(longUrl: string): Observable<shortenResponse> {
    const body: shortenRequest = {
      long_url: longUrl
    };
    return this.http.post<shortenResponse>(this.apiUrl, body);
  }
}
