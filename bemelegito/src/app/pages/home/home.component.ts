import { Contributor } from './../../model/contributor';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users?: Contributor[];

  constructor(
    private apiService : ApiService,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(): void {
    this.apiService.getUser().subscribe((apiResponse: Contributor[]) => {
      this.users = apiResponse.sort((a: Contributor, b: Contributor) => {
        return b.contributions - a.contributions;
      });

      //console.log(this.users)
    })
  }

}
