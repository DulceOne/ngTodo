import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public cards;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.post('/card/get/all',{}).subscribe(result => {
      this.cards = result;
      console.log(this.cards)
    })
  }

}
