import { Card } from '../models/card';
import { Action } from "@ngrx/store";
import {AddCard, CARD_ACTION} from './card.action'
const initialState = {
  cards: [
    new Card('Hello world', 'Dulce', '28.10.2019'),
    new Card('1337', 'Dulce', '28.10.2019'),
    new Card('1499', 'Dulce', '28.10.2019'),
  ]
}

export function cardReducer(state = initialState, action: AddCard) {
  switch (action.type) {
    case CARD_ACTION.ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          action.payload
        ]
      }
    default:
      return state;
  }
}
