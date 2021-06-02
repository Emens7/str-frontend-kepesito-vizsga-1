import { Contributor } from './../../model/contributor';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Repo } from 'src/app/model/repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  userRepos: Repo[] = [];



  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    new Date()
    this.apiService.getUserReposById(this.route.snapshot.paramMap.get('login')!).subscribe((apiResponse: Repo[]) => {
      this.userRepos = apiResponse.sort((a: Repo, b: Repo) => {
        return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf();
      });

    })
  }

}
