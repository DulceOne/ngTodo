import { Action } from "@ngrx/store";
import {Card} from "../models/card";

export  namespace CARD_ACTION {
  export const ADD_CARD = 'ADD_CARD'
}

export class AddCard implements Action {
  readonly type = CARD_ACTION.ADD_CARD

  constructor(public payload: Card) {}
}

