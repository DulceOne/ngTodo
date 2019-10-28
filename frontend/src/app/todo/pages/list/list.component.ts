import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service'
import { Store } from "@ngrx/store";
import { AppState } from "../../../redux/app.state";
import { Observable } from "rxjs/internal/Observable";
import { Cards } from "../../../models/card";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public cards;
  // public cardState: Observable<Cards>

  constructor(private http: HttpService, private store: Store<AppState>) { }

  ngOnInit() {
    // this.http.post('/card/get/all',{}).subscribe(result => {
    //   this.cards = result;
    //   console.log(this.cards)
    // })
    this.store.select('cardPage').subscribe(({cards}) => {
      this.cards = cards;
    })
    // this.cardState = this.store.select('cardPage');
  }

}
