export class Card {

  constructor(
    public body: string,
    public author: string,
    public date: string
  ) {}
}

export interface Cards {

  cards: Card[]

}
