import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private http: HttpService) { }

  @Input() card;

  ngOnInit() {
  }


  Edit() {
    console.log(this.card)

  }

  Remove() {
    this.http.post('/card/delete', {id: this.card._id}).subscribe(result => {
      alert("card is deleted")
    })
  }
}
