import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
    userImg: string = '';
  @Input()
    userName: string = '';
  @Input()
    commits: number = 0;

  constructor(
    private apiSevice: ApiService
  ) { }

  ngOnInit(): void {
  }

}
