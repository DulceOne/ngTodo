import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public data;
  public cards;
  public size;
  public page: number = 1;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getCards()
  }

  getCards() {
    console.log(this.page)
    this.http.post('/card/get/all',{page:this.page}).subscribe(result => {
      this.data = result;
      this.cards = this.data.result;
      this.size = this.data.count;
    })
  }

}
