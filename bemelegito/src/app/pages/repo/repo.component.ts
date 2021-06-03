import { Contributor } from './../../model/contributor';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Repo } from 'src/app/model/repo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  pageNumber = 1;
  userRepos: Repo[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    const login = this.route.snapshot.paramMap.get('login')!;
    this.apiService.getUserReposById(login, this.pageNumber).subscribe((apiResponse: Repo[]) => {
      this.userRepos = this.userRepos.concat(apiResponse.sort((a: Repo, b: Repo) => {
        return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf();
      }));

    },
    (error: any) => {
      this.toastr.error('The page failed to load!')
      console.log('Error!');
    }
    )
  }

  onScroll() {
    this.pageNumber++;
    this.getUserById();
    console.log('scrolled!!');
  }

}
