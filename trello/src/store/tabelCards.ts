"use client";
import { makeAutoObservable } from "mobx";

interface Table {
  id: number;
  tableName: string;
  cards: Array<Card>;
}

interface Card {
  id: number;
  tags: string;
  title: string;
  description: string;
  comments: number;
  likes: number;
  attach: number;
}

interface AddTable {
  (title: string): void;
}

interface AddCard {
  (
    tags: string,
    tableTitle: string,
    description: string,
    comments: number,
    likes: number,
    attach: number
  ): void;
}

interface ITableCards {
  tables: Array<Table>;
  cards: Array<Card>;

  addTable: AddTable;
  addCard: AddCard;
  //   deleteTable: (tableId: number) => void;
}

class TableCards implements ITableCards {
  tables: Array<Table> = [];
  cards: Card[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTable(tableTitle: string) {
    this.tables.push({
      id: Date.now(),
      tableName: tableTitle,
      cards: this.cards,
    });
  }

  addCard(
    tags: string,
    tableTitle: string,
    description: string,
    comments: number,
    likes: number,
    attach: number
  ) {
    const table = this.tables.find((table) => table.tableId === tableId);
    if (table) {
      table.cards.push({
        cardId: Date.now(),
        tags: tags,
        title: tableTitle,
        description: description,
        comments: comments,
        likes: likes,
        attach: attach,
      });
    }
  }

  //   deleteTable(tableId: number) {
  //     this.tables = this.tables.filter((item) => item !== tableId);
  //   }
}
export default new TableCards();
