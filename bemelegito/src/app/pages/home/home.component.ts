import { Contributor } from './../../model/contributor';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users?: Contributor[];

  constructor(
    private apiService : ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(): void {
    this.apiService.getUser(1).subscribe(
      (apiResponse: Contributor[]) => {
      this.users = apiResponse.sort((a: Contributor, b: Contributor) => {
        return b.contributions - a.contributions;
      });

      //console.log(this.users)
    },

    (error: any) => {
      this.toastr.error('The page failed to load!')
      console.log('Error!');
    }

    )
  }

  onScroll() {
    console.log('scrolled!!');
  }

}
