import { Contributor } from './../model/contributor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../model/repo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlAll = "https://api.github.com/repos/angular/angular/contributors?per_page=50";

  urlRepos = "https://api.github.com/users";


  constructor(
    private httpClient: HttpClient,
  ) { }

  getUser(page: number): Observable<Contributor[]> {
    return this.httpClient.get<Contributor[]>(`${this.urlAll}&page=${page}`);
  }

  getUserReposById(login: string): Observable<Repo[]> {
    return this.httpClient.get<Repo[]>(`${this.urlRepos}/${login}/repos`);
  }

}

