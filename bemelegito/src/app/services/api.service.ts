import { Contributor } from './../model/contributor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlAll = "https://api.github.com/repos/angular/angular/contributors?per_page=100";

  urlRepos = "https://api.github.com/users";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUser(): Observable<Contributor[]> {
    return this.httpClient.get<Contributor[]>(this.urlAll)
  }

  getUserById(login: string): Observable<Contributor> {
    return this.httpClient.get<Contributor>(`${this.urlRepos}/${login}/repos`);
  }

}
