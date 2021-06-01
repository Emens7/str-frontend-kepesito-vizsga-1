import { Contributor } from './../../model/contributor';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  oneUser? : Contributor;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    this.apiService.getUserById(this.route.snapshot.paramMap.get('login')!).subscribe((apiResponse: Contributor) => {
      this.oneUser = apiResponse;
      console.log(this.oneUser)
    })
  }



}
